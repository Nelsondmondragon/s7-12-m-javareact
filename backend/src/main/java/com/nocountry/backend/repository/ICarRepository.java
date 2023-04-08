package com.nocountry.backend.repository;

import com.nocountry.backend.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;

import com.nocountry.backend.model.Car;

import java.util.List;

public interface ICarRepository extends JpaRepository<Car, Long> {

     //List<Car> findAllByCategoryAndPickUpLocation(Long category, String pickUpLocation);

     List<Car> findAllByCategory_IdAndPickUpLocation(Long category, String pickUpLocation);
}
