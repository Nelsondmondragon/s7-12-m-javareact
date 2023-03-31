package com.nocountry.backend.repository;

import com.nocountry.backend.dto.CarDto;
import com.nocountry.backend.model.Car;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ICarRepository extends JpaRepository<Car,Long>{

}
