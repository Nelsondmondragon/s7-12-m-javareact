package com.nocountry.backend.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.nocountry.backend.dto.booking.BookingDto;
import com.nocountry.backend.service.IBookingService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/bookings")
@RequiredArgsConstructor
@Tag(name = "Bookings", description = "Management of bookings in MoveAr. It allows creating, modifying, and deleting bookings, as well as obtaining detailed information about them.")
@SecurityRequirement(name = "bearerAuth")
public class BookingController {

    private final IBookingService bookingService;

    @GetMapping("/all")
    @Operation(summary = "Get all bookings.")
    public ResponseEntity<List<BookingDto>> getAll() {
        var bookings = bookingService.findAllBookings();
        if (bookings.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(bookings, HttpStatus.OK);
        }
    }

    @GetMapping("/active")
    @Operation(summary = "Get all active bookings.")
    public ResponseEntity<List<BookingDto>> getAllActiveBookings() {
        var bookings = bookingService.findAllActiveBookings();
        if (bookings.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(bookings, HttpStatus.OK);
        }
    }

    @GetMapping("/{customerId}")
    @Operation(summary = "Get all bookings by customer Id.")
    public ResponseEntity<List<BookingDto>> getBookingByCustomerId(@PathVariable Long customerId) {
        return new ResponseEntity<>(bookingService.findBookingByCustomerId(customerId), HttpStatus.OK);
    }

    @GetMapping("/{bookingId}")
    @Operation(summary = "Get a booking by Id.")
    public ResponseEntity<BookingDto> getBookingById(@PathVariable Long bookingId) {
        return new ResponseEntity<>(bookingService.findBookingById(bookingId), HttpStatus.OK);
    }

    @PostMapping("/create")
    @Operation(summary = "Create a new booking.")
    public ResponseEntity<BookingDto> createBooking(
            @RequestParam Long carId,
            @RequestParam Long customerId,
            @RequestBody BookingDto bookingDto) {
        return new ResponseEntity<>(bookingService.saveBooking(carId, customerId, bookingDto), HttpStatus.CREATED);
    }

    @PutMapping("/{bookingId}/update")
    @Operation(summary = "Update an existing booking by Id.")
    public ResponseEntity<BookingDto> updateBooking(@PathVariable Long bookingId,
            @RequestBody BookingDto bookingDto) {
        return new ResponseEntity<>(bookingService.updateBooking(bookingId, bookingDto), HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/{bookingId}/delete")
    @Operation(summary = "Delete an existing booking by Id.")
    public ResponseEntity<String> deleteBooking(@PathVariable Long bookingId) {
        bookingService.deleteBooking(bookingId);
        return new ResponseEntity<>("Booking successfully deleted", HttpStatus.ACCEPTED);
    }
}
