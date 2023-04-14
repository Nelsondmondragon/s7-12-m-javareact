package com.nocountry.backend.service;

import java.time.LocalDateTime;
import java.util.List;

import com.nocountry.backend.dto.booking.BookingDto;
import com.nocountry.backend.model.Booking;

public interface IBookingService {

    public List<BookingDto> findAllBookings();

    public BookingDto findBookingById(Long bookingId);

    public BookingDto saveBooking(Long carId, Long customerId, BookingDto bookingDto);

    public BookingDto updateBooking(Long bookingId, BookingDto bookingDto);

    public void deleteBooking(Long bookingId);

    public boolean validateDateBooking(LocalDateTime startDate, LocalDateTime endDate, Booking booking);
}
