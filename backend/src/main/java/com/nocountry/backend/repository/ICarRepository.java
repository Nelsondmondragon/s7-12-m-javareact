package com.nocountry.backend.repository;

import com.nocountry.backend.model.Car;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ICarRepository extends JpaRepository<Car,Long>{

}
