package com.nocountry.backend.controller;

import java.util.List;
import java.util.Optional;

import com.nocountry.backend.service.ICarService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nocountry.backend.dto.CarDto;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/cars")
@RequiredArgsConstructor
public class CarController {

    private final ICarService carService;

    @GetMapping("/all")
    public ResponseEntity<List<CarDto>> getAllCars() {
        List<CarDto> cars = carService.findAllCars();
        if (cars.isEmpty()) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.ok(cars);
        }
    }
    @GetMapping("/category/{categoryId}")
    public ResponseEntity<List<CarDto>> getAllByCategory(@PathVariable(value = "categoryId") Long categoryId) {
        List<CarDto> cars = carService.findAllCarsByCategory(categoryId);
        if (cars.isEmpty()) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.ok(cars);
        }
    }

    @GetMapping("/{carId}")
    public ResponseEntity<CarDto> getCar(@PathVariable(value = "carId") Long carId) {
        CarDto carDto = carService.findCarById(carId);
        return ResponseEntity.ok(carDto);
    }

    @PostMapping("/create")
    public ResponseEntity<CarDto> createCar(@RequestBody CarDto carDto) {
        CarDto carSaved = carService.saveCar(carDto);
        return ResponseEntity.ok(carSaved);
    }

    @PutMapping("/{carId}/update")
    public ResponseEntity<CarDto> updateCar(@PathVariable(value = "carId") Long carId, @RequestBody CarDto carDto) {
        CarDto saved = carService.updateCar(carId, carDto);
        return ResponseEntity.ok(saved);
    }

    @DeleteMapping("/{carId}/delete")
    public ResponseEntity<String> deleteCar(@PathVariable(value = "carId") Long carId) {
        Optional<CarDto> car = Optional.ofNullable(carService.findCarById(carId));
        if (car.isPresent()) {
            carService.deleteCar(carId);
            return new ResponseEntity<>("Car successfully deleted", HttpStatus.ACCEPTED);
        } else {
            return new ResponseEntity<>("Car not found", HttpStatus.NOT_FOUND);
        }
    }
}
