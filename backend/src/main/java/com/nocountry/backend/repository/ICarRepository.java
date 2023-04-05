package com.nocountry.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nocountry.backend.model.Car;

import java.util.List;

public interface ICarRepository extends JpaRepository<Car, Long> {

    List<Car> findAllByCategory_Id(Long categoryId);

}
