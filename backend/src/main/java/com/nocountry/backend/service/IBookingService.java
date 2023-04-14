package com.nocountry.backend.service;

import java.time.LocalDateTime;
import java.util.List;

import com.nocountry.backend.dto.booking.BookingDto;
import com.nocountry.backend.model.Booking;

public interface IBookingService {

    public List<BookingDto> findAllBookings();

    public List<BookingDto> findBookingsByFilters(LocalDateTime startTime, LocalDateTime endTime, String pickUpLocation,
            String dropOffLocation, Boolean assignedDriver, Boolean helperPawn, Boolean active, Long fkCar,
            Long fkCustomer);

    public BookingDto findBookingById(Long bookingId);

    public BookingDto saveBooking(Long carId, Long customerId, BookingDto bookingDto);

    public BookingDto updateBooking(Long bookingId, BookingDto bookingDto);

    public void deleteBooking(Long bookingId);

    public boolean validateDateBooking(LocalDateTime startDate, LocalDateTime endDate, Booking booking);
}
