package com.nocountry.backend.repository;

import java.util.List;

import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;

import com.nocountry.backend.model.entity.Booking;

public interface IBookingRepository extends JpaRepository<Booking, Long> {

    public List<Booking> findAll(Specification<Booking> spec);

    public List<Booking> findAllByFkCar(Long fkCar);

//    public List<Booking> findAllByFkLocation(String pickUpLocation);
}
