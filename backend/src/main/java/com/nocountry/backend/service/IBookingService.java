package com.nocountry.backend.service;

import com.nocountry.backend.dto.BookingDto;

import java.util.List;

public interface IBookingService {

    public List<BookingDto> findAllBookings();

    public BookingDto getBookingById(Long bookingId);

    public BookingDto saveBooking(BookingDto bookingDto);

    public BookingDto updateBooking(Long bookingId, BookingDto bookingDto);

    public void deleteBooking(Long bookingId);
}
