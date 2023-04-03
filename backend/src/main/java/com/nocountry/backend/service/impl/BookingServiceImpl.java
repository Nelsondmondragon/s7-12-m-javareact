package com.nocountry.backend.service.impl;

import com.nocountry.backend.dto.BookingDto;
import com.nocountry.backend.mapper.IBookingMapper;
import org.springframework.stereotype.Service;

import com.nocountry.backend.repository.IBookingRepository;
import com.nocountry.backend.service.IBookingService;

import lombok.RequiredArgsConstructor;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BookingServiceImpl implements IBookingService {

    private final IBookingRepository bookingRepository;
    private final IBookingMapper bookingMapper;

    @Override
    public List<BookingDto> findAll() {
        return this.bookingMapper.toBookingDtos(this.bookingRepository.findAll());
    }
}
