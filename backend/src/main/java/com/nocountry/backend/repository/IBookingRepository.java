package com.nocountry.backend.repository;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nocountry.backend.model.Booking;

public interface IBookingRepository extends JpaRepository<Booking, Long> {

    List<Booking> findAllByFkCar(Long fkCar);

   List<Booking> findAllByPickUpLocation(String pickUpLocation);
}
