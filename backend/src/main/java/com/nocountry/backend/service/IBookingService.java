package com.nocountry.backend.service;

import com.nocountry.backend.dto.BookingDto;

import java.util.List;

public interface IBookingService {


    public List<BookingDto> findAll();

}
