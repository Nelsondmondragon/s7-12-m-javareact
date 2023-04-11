package com.nocountry.backend.repository;

import java.util.List;

import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;

import com.nocountry.backend.model.Car;

public interface ICarRepository extends JpaRepository<Car, Long> {

     public List<Car> findAllByCategoryIdAndPickUpLocation(Long category, String pickUpLocation);

     public List<Car> findAll(Specification<Car> spec);
}
