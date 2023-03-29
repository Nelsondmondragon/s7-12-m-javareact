package com.nocountry.backend.controller;

import com.nocountry.backend.dto.BookingDto;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nocountry.backend.service.IBookingService;

import lombok.RequiredArgsConstructor;

import java.util.List;

@RestController
@RequestMapping("/api/v1/bookings")
@RequiredArgsConstructor
public class BookingController {

    private final IBookingService bookingService;

    @GetMapping("")
    public ResponseEntity<List<BookingDto>> getAll() {
        return new ResponseEntity<>(this.bookingService.findAll(), HttpStatus.OK);
    }
}
