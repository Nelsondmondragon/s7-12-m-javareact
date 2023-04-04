package com.nocountry.backend.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.nocountry.backend.dto.BookingDto;
import com.nocountry.backend.mapper.IBookingMapper;
import com.nocountry.backend.model.Booking;
import com.nocountry.backend.repository.IBookingRepository;
import com.nocountry.backend.service.IBookingService;

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
        var booking = bookingMapper.toBooking(bookingDto);
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
}
