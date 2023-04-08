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
    public BookingDto getBookingById(Long bookingId) {
        var booking = bookingRepository.findById(bookingId).orElseThrow();
        return bookingMapper.toBookingDto(booking);
    }

    @Override
    public BookingDto saveBooking(BookingDto bookingDto) {
        this.validateBooking(bookingDto);
        var booking = bookingMapper.toBooking(bookingDto);

        booking.setFkCustomer(bookingDto.getFkCustomer());
        booking.setFkCar(bookingDto.getFkCar());
        booking.setStartTime(bookingDto.getStartTime());
        booking.setEndTime(bookingDto.getEndTime());
        booking.setPickUpLocation(bookingDto.getPickUpLocation());
        booking.setDropOffLocation(bookingDto.getPickUpLocation());
        booking.setAssignedDriver(bookingDto.getAssignedDriver());
        booking.setHelperPawn(bookingDto.getHelperPawn());

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
    public boolean validateDateBooking(LocalDateTime startDate, LocalDateTime endDate, Booking booking){

        if (startDate.isBefore(booking.getStartTime()) && endDate.isBefore(booking.getStartTime())){
            return false;
        }
        if (startDate.isAfter(booking.getEndTime()) && endDate.isAfter(booking.getEndTime())){
            return false;
        }
        return true;






        //<(rango amplio)>
      /*  if(startDate.isBefore(booking.getStartTime()) && endDate.isAfter(booking.getEndTime())){
            return true;
        }
        //>=(rango incluido)<=
        if((startDate.isAfter(booking.getStartTime())||startDate.isEqual(booking.getStartTime())) && (endDate.isAfter(booking.getEndTime())||endDate.isEqual(booking.getEndTime()))){
            return true;
        }
        //si la reserva comienza antes pero influye en otras reservas <(rango incluido)
        if((
                startDate.isBefore(booking.getStartTime()))
                &&
                (endDate.isBefore(booking.getEndTime())||endDate.isEqual(booking.getEndTime()))){
            return true;
        }
        //si la reserva comienza en el rango de otra reserva y termina en otra fecha mas amplia
        if((
                startDate.isAfter(booking.getStartTime())||startDate.isEqual(booking.getStartTime()))
                &&
                (endDate.isAfter(booking.getEndTime()))){
            return true;
        }*/

  /*      return false;*/

    }
    // crear BookingOverlapException
    private void validateBooking(BookingDto bookingDto) {
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
