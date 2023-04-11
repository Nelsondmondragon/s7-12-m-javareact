package com.nocountry.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nocountry.backend.model.Car;

public interface ICarRepository extends JpaRepository<Car, Long> {

     public List<Car> findAllByCategory_IdAndPickUpLocation(Long category, String pickUpLocation);
}
