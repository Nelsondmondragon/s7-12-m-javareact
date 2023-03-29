package com.nocountry.backend.repository;

import com.nocountry.backend.model.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IBookingRepository extends JpaRepository<Booking, Long> {

}
