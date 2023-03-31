package com.nocountry.backend.controller;

import com.nocountry.backend.dto.CarDto;
import org.springframework.http.ResponseEntity;
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

    @PutMapping("/{id}")
    public ResponseEntity<CarDto> updateCar(@PathVariable(value = "id") Long id, @RequestBody CarDto carDetails) {
        CarDto saved= service.updateCarById(id,carDetails);
        return ResponseEntity.ok(saved);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteCar(@PathVariable(value = "id") Long id) {
        Optional<CarDto> car = Optional.ofNullable(service.getCarById(id));
        if (car.isPresent()) {
            service.deleteCar(id);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
