package com.nocountry.backend.service.impl;

import java.math.BigDecimal;
import java.time.Duration;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import com.nocountry.backend.Error.ErrorCode;
import com.nocountry.backend.Error.Exceptions.OverlappedBookingException;
import com.nocountry.backend.dto.booking.BookingDto;
import com.nocountry.backend.mapper.IBookingMapper;
import com.nocountry.backend.model.Booking;
import com.nocountry.backend.model.Car;
import com.nocountry.backend.model.Customer;
import com.nocountry.backend.repository.IBookingRepository;
import com.nocountry.backend.repository.ICarRepository;
import com.nocountry.backend.repository.ICustomerRepository;
import com.nocountry.backend.service.IBookingService;
import com.nocountry.backend.service.IMailSenderService;
import com.nocountry.backend.specification.BookingSpecification;

import jakarta.mail.MessagingException;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class BookingServiceImpl implements IBookingService {

    private final IBookingRepository bookingRepository;

    private final IBookingMapper bookingMapper;

    private final ICarRepository carRepository;

    private final ICustomerRepository customerRepository;

    private final IMailSenderService mailSenderService;

    @Override
    public List<BookingDto> findAllBookings() {
        return bookingMapper.toBookingDtos(bookingRepository.findAll());
    }

    @Override
    public List<BookingDto> findBookingsByFilters(LocalDateTime startTime, LocalDateTime endTime, String pickUpLocation,
            String dropOffLocation, Boolean assignedDriver, Boolean helperPawn, Boolean active, Long fkCar,
            Long fkCustomer) {

        Specification<Booking> spec = Specification.where(null);

        if (startTime != null) {
            spec = spec.and(BookingSpecification.hasStartTime(startTime));
        }

        if (endTime != null) {
            spec = spec.and(BookingSpecification.hasEndTime(endTime));
        }

        if (pickUpLocation != null) {
            spec = spec.and(BookingSpecification.hasPickUpLocation(pickUpLocation));
        }

        if (dropOffLocation != null) {
            spec = spec.and(BookingSpecification.hasDropOffLocation(dropOffLocation));
        }

        if (assignedDriver != null) {
            spec = spec.and(BookingSpecification.hasAssignedDriver(assignedDriver));
        }

        if (helperPawn != null) {
            spec = spec.and(BookingSpecification.hasHelperPawn(helperPawn));
        }

        if (active != null) {
            spec = spec.and(BookingSpecification.hasActive(active));
        }

        if (fkCar != null) {
            spec = spec.and(BookingSpecification.hasFkCar(fkCar));
        }

        if (fkCustomer != null) {
            spec = spec.and(BookingSpecification.hasFkCustomer(fkCustomer));
        }

        var bookingsFiltered = bookingRepository.findAll(spec);
        return bookingMapper.toBookingDtos(bookingsFiltered);
    }

    @Override
    public BookingDto findBookingById(Long bookingId) {
        var booking = bookingRepository.findById(bookingId).orElseThrow();
        return bookingMapper.toBookingDto(booking);
    }

    @Override
    public BookingDto saveBooking(Long carId, Long customerId, BookingDto bookingRequestDto) {
        var booking = bookingMapper.toBooking(bookingRequestDto);
        var car = carRepository.findById(carId).orElseThrow();
        var customer = customerRepository.findById(customerId).orElseThrow();

        validateOverlapBooking(carId, booking);
        calculateTotalPrice(car, booking);

        booking.setStartTime(bookingRequestDto.getStartTime());
        booking.setEndTime(bookingRequestDto.getEndTime());
        booking.setPickUpLocation(car.getLocation().getName());
        booking.setDropOffLocation(bookingRequestDto.getDropOffLocation());
        booking.setAssignedDriver(bookingRequestDto.getAssignedDriver());
        booking.setHelperPawn(bookingRequestDto.getHelperPawn());
        booking.setActive(true);
        booking.setCar(car);
        booking.setCustomer(customer);

        sendBookingEmail(booking, car, customer);

        var bookingResponseDto = bookingMapper.toBookingDto(bookingRepository.save(booking));
        var customerDto = bookingResponseDto.getCustomer();

        customerDto.setEmail(customer.getUser().getEmail());
        customerDto.setIdLocation(customer.getFkLocation());

        return bookingResponseDto;
    }

    @Override
    public BookingDto updateBooking(Long bookingId, BookingDto bookingDto) {
        var booking = bookingRepository.findById(bookingId).orElseThrow();
        var car = carRepository.findById(booking.getFkCar()).orElseThrow();

        LocalDateTime currentDateTime = LocalDateTime.now();
        if (currentDateTime.isAfter(booking.getStartTime())) {
            throw new IllegalArgumentException("Cannot modify booking that has already started.");
        }

        validateOverlapBooking(car.getId(), booking);

        bookingMapper.updateBooking(bookingDto, booking);

        calculateTotalPrice(car, booking);

        return bookingMapper.toBookingDto(bookingRepository.save(booking));
    }

    @Override
    public void deleteBooking(Long bookingId) {
        bookingRepository.deleteById(bookingId);
    }

    @Override
    public boolean validateDateBooking(LocalDateTime startDate, LocalDateTime endDate, Booking booking) {

        if (startDate.isBefore(booking.getStartTime()) && endDate.isBefore(booking.getStartTime())) {
            return false;
        }
        if (startDate.isAfter(booking.getEndTime()) && endDate.isAfter(booking.getEndTime())) {
            return false;
        }
        return true;

    }

    private void validateOverlapBooking(Long carId, Booking booking) {
        List<Booking> allCarBookings = bookingRepository.findAllByFkCar(carId);
        Duration margin = Duration.ofHours(1);

        for (Booking carBooking : allCarBookings) {
            LocalDateTime newBookingStart = booking.getStartTime().minus(margin);
            LocalDateTime newBookingEnd = booking.getEndTime().plus(margin);
            LocalDateTime existingBookingStart = carBooking.getStartTime();
            LocalDateTime existingBookingEnd = carBooking.getEndTime();

            if (existingBookingStart.isBefore(newBookingEnd) && newBookingStart.isBefore(existingBookingEnd)) {
                throw new OverlappedBookingException(ErrorCode.OVERLAPPED_BOOKING);
            }
        }
    }

    private void calculateTotalPrice(Car car, Booking booking) {

        // Calcular el precio base de la reserva
        var hours = Duration.between(booking.getStartTime(), booking.getEndTime()).toHours();
        var basePrice = car.getCategory().getHourlyPrice()
                .multiply(BigDecimal.valueOf(hours));

        // Sumar cargos adicionales si corresponden
        if (booking.getAssignedDriver()) {
            basePrice = basePrice.add(BigDecimal.valueOf(10000));
        }
        if (booking.getHelperPawn()) {
            basePrice = basePrice.add(BigDecimal.valueOf(10000));
        }

        // Actualizar el precio total de la reserva
        booking.setTotalPrice(basePrice);
        bookingRepository.save(booking);
    }

    private void sendBookingEmail(Booking booking, Car car, Customer customer) {
        String to = customer.getUser().getEmail();
        String subject = "Confirmación de reserva";
        String text = "<html><body>"
                + "<p>Estimado/a " + customer.getFullName() + ",</p>"
                + "<p>Le agradecemos por elegir MoveAR para sus necesidades de mudanza. Este correo electrónico es para confirmar la reserva del vehículo que solicitó. A continuación encontrará los detalles de su reserva:</p>"
                + "<ul>"
                + "<li>Fecha y hora de retiro: "
                + booking.getStartTime().format(DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm")) + "</li>"
                + "<li>Lugar de retiro: " + car.getLocation().getName() + "</li>"
                + "<li>Fecha y hora de entrega: "
                + booking.getEndTime().format(DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm")) + "</li>"
                + "<li>Lugar de entrega: " + booking.getDropOffLocation() + "</li>"
                + "</ul>"
                + "<p>Información del vehículo:</p>"
                + "<ul>"
                + "<li>Marca: " + car.getMake() + "</li>"
                + "<li>Modelo: " + car.getModel() + "</li>"
                + "<li>Patente: " + car.getPatent() + "</li>"
                + "<li>Categoría: " + car.getCategory().getName() + "</li>"
                + "<li>Cantidad de pasajeros: " + car.getPassengers() + "</li>"
                + "</ul>"
                + "<p>Por favor, asegúrese de llegar al lugar de retiro a tiempo y llevar consigo una identificación válida y la tarjeta de crédito utilizada para realizar la reserva. Si tiene alguna pregunta o necesita hacer algún cambio en su reserva, no dude en contactarnos por correo electrónico o por teléfono.</p>"
                + "<p>Gracias por confiar en MoveAR para su mudanza. Esperamos proporcionarle una experiencia sin estrés satisfactoria. ¡Que tenga un buen día!</p>"
                + "<p>Atentamente,<br>El equipo de MoveAR</p>"
                + "</body></html>";

        try {
            mailSenderService.sendEmail(to, subject, text);
        } catch (MessagingException e) {
            e.printStackTrace();
        }
    }
}
