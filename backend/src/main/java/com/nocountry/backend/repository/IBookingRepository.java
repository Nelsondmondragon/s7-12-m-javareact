package com.nocountry.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nocountry.backend.dto.booking.BookingDto;
import com.nocountry.backend.model.Booking;

public interface IBookingRepository extends JpaRepository<Booking, Long> {

    public List<Booking> findAllByFkCar(Long fkCar);

    public List<Booking> findAllByPickUpLocation(String pickUpLocation);

    public List<Booking> findByActiveTrue();
}
