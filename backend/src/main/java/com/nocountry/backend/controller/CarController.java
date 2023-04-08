package com.nocountry.backend.controller;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.nocountry.backend.dto.CarDto;
import com.nocountry.backend.service.ICarService;

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

    @GetMapping("/getbyfilters")
    public ResponseEntity<List<CarDto>> getAllCarsByFilter(
            @RequestParam(required = false) Long id_category,
            @RequestParam(required = true) String pickUpLocation,
            @RequestParam(required = true) LocalDateTime startTime,
            @RequestParam(required = true) LocalDateTime endTime
            ) {
        List<CarDto> cars = carService.findAllCarsByFilters(id_category,pickUpLocation,startTime,endTime);
        if (cars.isEmpty()) {
            return ResponseEntity.noContent().build();
        }
        else {
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
