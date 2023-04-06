package com.nocountry.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nocountry.backend.model.Booking;

public interface IBookingRepository extends JpaRepository<Booking, Long> {

    List<Booking> findAllByFkCar(Long fkCar);
}
