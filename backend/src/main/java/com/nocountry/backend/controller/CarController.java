package com.nocountry.backend.controller;

import com.nocountry.backend.dto.CarDto;
import com.nocountry.backend.model.Car;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.ErrorResponse;
import org.springframework.web.bind.annotation.*;

import com.nocountry.backend.service.ICarService;

import lombok.RequiredArgsConstructor;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/cars")
@RequiredArgsConstructor
public class CarController {
    private final ICarService service;
    @GetMapping
    public ResponseEntity<List<CarDto>> getAllCars() {
        List<CarDto> cars = service.getCars();
        if (cars.isEmpty()) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.ok(cars);
        }
    }

    @PostMapping
    public ResponseEntity<CarDto> createCar(@RequestBody CarDto carDto) {
        CarDto carSaved=service.saveCar(carDto);
        return ResponseEntity.ok(carSaved);
    }
    @GetMapping("/{id}")
    public ResponseEntity<CarDto> getCarById(@PathVariable(value = "id") Long id) {
        CarDto carDto = service.getCarById(id);
        return ResponseEntity.ok(carDto);
    }

}
