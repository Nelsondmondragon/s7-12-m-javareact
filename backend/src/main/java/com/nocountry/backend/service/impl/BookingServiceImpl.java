package com.nocountry.backend.service.impl;

import java.time.Duration;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.nocountry.backend.dto.BookingDto;
import com.nocountry.backend.mapper.IBookingMapper;
import com.nocountry.backend.model.Booking;
import com.nocountry.backend.repository.IBookingRepository;
import com.nocountry.backend.service.IBookingService;

import jakarta.persistence.EntityExistsException;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class BookingServiceImpl implements IBookingService {

    private final IBookingRepository bookingRepository;

    private final IBookingMapper bookingMapper;

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
    public BookingDto saveBooking(BookingDto bookingDto) {
        validateOverlapBooking(bookingDto);
        var booking = bookingMapper.toBooking(bookingDto);

        booking.setFkCustomer(bookingDto.getFkCustomer());
        booking.setFkCar(bookingDto.getFkCar());
        booking.setStartTime(bookingDto.getStartTime());
        booking.setEndTime(bookingDto.getEndTime());
        booking.setPickUpLocation(bookingDto.getPickUpLocation());
        booking.setDropOffLocation(bookingDto.getPickUpLocation());
        booking.setAssignedDriver(bookingDto.getAssignedDriver());
        booking.setHelperPawn(bookingDto.getHelperPawn());

        // var customerDto =
        // customerService.findCustomerById(bookingDto.getFkCustomer());
        // var carDto = carService.findCarById(bookingDto.getFkCar());
        // String to = customerDto.getEmail();
        // String subject = "Confirmación de reserva";
        // String text = "<html><body>"
        // + "<p>Estimado/a " + customerDto.getFirstName() + ",</p>"
        // + "<p>Le agradecemos por elegir MoveAR para sus necesidades de mudanza. Este
        // correo electrónico es para confirmar la reserva del vehículo que solicitó. A
        // continuación encontrará los detalles de su reserva:</p>"
        // + "<ul>"
        // + "<li>Fecha y hora de retiro: "
        // + bookingDto.getStartTime().format(DateTimeFormatter.ofPattern("dd/MM/yyyy
        // HH:mm")) + "</li>"
        // + "<li>Lugar de retiro: " + bookingDto.getPickUpLocation() + "</li>"
        // + "<li>Fecha y hora de entrega: "
        // + bookingDto.getEndTime().format(DateTimeFormatter.ofPattern("dd/MM/yyyy
        // HH:mm")) + "</li>"
        // + "<li>Lugar de entrega: " + bookingDto.getDropOffLocation() + "</li>"
        // + "</ul>"
        // + "<p>Información del vehículo:</p>"
        // + "<ul>"
        // + "<li>Marca: " + carDto.getMake() + "</li>"
        // + "<li>Modelo: " + carDto.getModel() + "</li>"
        // + "<li>Patente: " + carDto.getPatent() + "</li>"
        // + "<li>Categoría: " + carDto.getCategory() + "</li>"
        // + "<li>Número de pasajeros: " + carDto.getPassengers() + "</li>"
        // + "</ul>"
        // + "<p>Por favor, asegúrese de llegar al lugar de retiro a tiempo y llevar
        // consigo una identificación válida y la tarjeta de crédito utilizada para
        // realizar la reserva. Si tiene alguna pregunta o necesita hacer algún cambio
        // en su reserva, no dude en contactarnos por correo electrónico o por
        // teléfono.</p>"
        // + "<p>Gracias por confiar en MoveAR para su mudanza. Esperamos proporcionarle
        // una experiencia sin estrés y satisfactoria. ¡Que tenga un buen día!</p>"
        // + "<p>Atentamente,<br>El equipo de MoveAR</p>"
        // + "</body></html>";

        // try {
        // mailSenderService.sendEmail(to, subject, text);
        // } catch (MessagingException e) {
        // e.printStackTrace();
        // }

        return bookingMapper.toBookingDto(bookingRepository.save(booking));
    }

    @Override
    public BookingDto updateBooking(Long bookingId, BookingDto bookingDto) {
        Optional<Booking> booking = bookingRepository.findById(bookingId);
        bookingMapper.updateBooking(bookingDto, booking.get());
        return bookingDto;
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

    private void validateOverlapBooking(BookingDto bookingDto) {
        List<Booking> allCarBookings = bookingRepository.findAllByFkCar(bookingDto.getFkCar());
        Duration margin = Duration.ofMinutes(30);

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
