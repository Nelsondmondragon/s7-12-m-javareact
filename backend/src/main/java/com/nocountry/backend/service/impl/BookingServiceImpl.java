package com.nocountry.backend.service.impl;

import java.time.Duration;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.nocountry.backend.dto.booking.BookingDto;
import com.nocountry.backend.mapper.IBookingMapper;
import com.nocountry.backend.model.Booking;
import com.nocountry.backend.repository.IBookingRepository;
import com.nocountry.backend.repository.ICarRepository;
import com.nocountry.backend.repository.ICustomerRepository;
import com.nocountry.backend.service.IBookingService;
import com.nocountry.backend.service.IMailSenderService;

import jakarta.mail.MessagingException;
import jakarta.persistence.EntityExistsException;
import jakarta.persistence.EntityNotFoundException;
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
    public BookingDto findBookingById(Long bookingId) {
        var booking = bookingRepository.findById(bookingId).orElseThrow();
        return bookingMapper.toBookingDto(booking);
    }

    @Override
    public BookingDto saveBooking(Long carId, Long customerId, BookingDto bookingDto) {

        validateOverlapBooking(carId, bookingDto);

        var booking = bookingMapper.toBooking(bookingDto);
        var car = carRepository.findById(carId).orElse(null);
        var customer = customerRepository.findById(customerId).orElse(null);

        booking.setStartTime(bookingDto.getStartTime());
        booking.setEndTime(bookingDto.getEndTime());
//        booking.setPickUpLocation(car.getPickUpLocation());
        booking.setDropOffLocation(bookingDto.getDropOffLocation());
        booking.setAssignedDriver(bookingDto.getAssignedDriver());
        booking.setHelperPawn(bookingDto.getHelperPawn());
        booking.setFkCar(carId);
        booking.setFkCustomer(customerId);

        String to = customer.getUser().getEmail();
        String subject = "Confirmación de reserva";
        String text = "<html><body>"
                + "<p>Estimado/a " + customer.getFullName() + ",</p>"
                + "<p>Le agradecemos por elegir MoveAR para sus necesidades de mudanza. Este correo electrónico es para confirmar la reserva del vehículo que solicitó. A continuación encontrará los detalles de su reserva:</p>"
                + "<ul>"
                + "<li>Fecha y hora de retiro: "
                + bookingDto.getStartTime().format(DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm")) + "</li>"
//                + "<li>Lugar de retiro: " + car.getPickUpLocation() + "</li>"
                + "<li>Fecha y hora de entrega: "
                + bookingDto.getEndTime().format(DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm")) + "</li>"
                + "<li>Lugar de entrega: " + bookingDto.getDropOffLocation() + "</li>"
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

        return bookingMapper.toBookingDto(bookingRepository.save(booking));
    }

    @Override
    public BookingDto updateBooking(Long bookingId, BookingDto bookingDto) {
        Optional<Booking> bookingEntity = bookingRepository.findById(bookingId);
        if (bookingEntity.isPresent()) {
            Booking booking = bookingEntity.get();
            bookingMapper.updateBooking(bookingDto, booking);
            Booking updatedBooking = bookingRepository.save(booking);
            BookingDto updatedBookingDto = bookingMapper.toBookingDto(updatedBooking);
            return updatedBookingDto;
        } else {
            throw new EntityNotFoundException("Booking not found with id: " + bookingId);
        }
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

    private void validateOverlapBooking(Long carId, BookingDto bookingDto) {
        List<Booking> allCarBookings = bookingRepository.findAllByFkCar(carId);
        Duration margin = Duration.ofHours(1);

        for (Booking carBooking : allCarBookings) {
            LocalDateTime newBookingStart = bookingDto.getStartTime().minus(margin);
            LocalDateTime newBookingEnd = bookingDto.getEndTime().plus(margin);
            LocalDateTime existingBookingStart = carBooking.getStartTime();
            LocalDateTime existingBookingEnd = carBooking.getEndTime();

            if (existingBookingStart.isBefore(newBookingEnd) && newBookingStart.isBefore(existingBookingEnd)) {
                throw new EntityExistsException("The booking overlaps with another existing booking");
            }
        }
    }
}
