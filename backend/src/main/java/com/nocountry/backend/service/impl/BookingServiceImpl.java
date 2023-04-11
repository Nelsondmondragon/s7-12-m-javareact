package com.nocountry.backend.service.impl;

import java.time.Duration;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.nocountry.backend.Error.Exceptions.GenericNotFoundException;
import com.nocountry.backend.model.Category;
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
        List<Booking> bookingEntities = bookingRepository.findAll();
        if (bookingEntities.isEmpty()) {
            return new ArrayList<>();
        } else {
            return bookingMapper.toBookingDtos(bookingEntities);
        }
    }

    @Override
    public BookingDto getBookingById(Long bookingId) {
        Booking bookingEntity = bookingRepository.findById(bookingId)
                .orElseThrow(() -> new GenericNotFoundException(String.format("The booking with the provided ID (%s) was not found", bookingId)));
        return bookingMapper.toBookingDto(bookingEntity);
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
        Booking booking = bookingRepository.findById(bookingId)
                .orElseThrow(() -> new GenericNotFoundException(String.format("The booking with the provided ID (%s) was not found",bookingId)));
        bookingMapper.updateBooking(bookingDto,booking);
        Booking updatedBooking= bookingRepository.save(booking);
        return bookingMapper.toBookingDto(updatedBooking);
    }

    @Override
    public void deleteBooking(Long bookingId) {
        Booking booking = bookingRepository.findById(bookingId).orElseThrow(() ->
                new GenericNotFoundException(String.format("The booking with ID %s was not found. You cannot delete a booking that does not exist.", bookingId)));
        bookingRepository.delete(booking);
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
