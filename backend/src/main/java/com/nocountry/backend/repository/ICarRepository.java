package com.nocountry.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nocountry.backend.model.Car;

public interface ICarRepository extends JpaRepository<Car, Long> {

}
