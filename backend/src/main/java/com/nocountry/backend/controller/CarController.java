package com.nocountry.backend.controller;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.nocountry.backend.dto.CarDto;
import com.nocountry.backend.service.ICarService;

import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/cars")
@RequiredArgsConstructor
@SecurityRequirement(name = "bearerAuth")

public class CarController {

    private final ICarService carService;

    @GetMapping("/all")
    public ResponseEntity<List<CarDto>> getAllCars() {
        var cars = carService.findAllCars();
        if (cars.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(cars, HttpStatus.ACCEPTED);
        }
    }

    @GetMapping("/filters")
    public ResponseEntity<List<CarDto>> getCarsByFilters2(
            @RequestParam(required = false) String model,
            @RequestParam(required = false) String make,
            @RequestParam(required = false) Integer year,
            @RequestParam(required = false) Boolean air,
            @RequestParam(required = false) Boolean gps,
            @RequestParam(required = false) Integer passengers,
            @RequestParam(required = false) String pickUpLocation,
            @RequestParam(required = false) Long idCategory,
            @RequestParam LocalDateTime startTime,
            @RequestParam LocalDateTime endTime) {
        List<CarDto> cars = carService.findCarsByFilters2(model, make, year, air, gps, passengers, pickUpLocation,
                idCategory, startTime, endTime);
        return new ResponseEntity<>(cars, HttpStatus.OK);
    }

    @GetMapping("/getbyfilters")
    public ResponseEntity<List<CarDto>> getCarsByFilters(
            @RequestParam(required = false) Long idCategory,
            @RequestParam(required = true) String pickUpLocation,
            @RequestParam(required = true) LocalDateTime startTime,
            @RequestParam(required = true) LocalDateTime endTime) {
        List<CarDto> cars = carService.findCarsByFilters(idCategory, pickUpLocation, startTime, endTime);
        if (cars.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(cars, HttpStatus.ACCEPTED);
        }
    }

    @GetMapping("/{carId}")
    public ResponseEntity<CarDto> getCarById(@PathVariable Long carId) {
        return new ResponseEntity<>(carService.findCarById(carId), HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<CarDto> createCar(@RequestBody CarDto carDto) {
        return new ResponseEntity<>(carService.saveCar(carDto), HttpStatus.OK);
    }

    @PutMapping("/{carId}/update")
    public ResponseEntity<CarDto> updateCar(@PathVariable Long carId, @RequestBody CarDto carDto) {
        return new ResponseEntity<>(carService.updateCar(carId, carDto), HttpStatus.OK);
    }

    @DeleteMapping("/{carId}/delete")
    public ResponseEntity<String> deleteCar(@PathVariable Long carId) {
        Optional<CarDto> car = Optional.ofNullable(carService.findCarById(carId));
        if (car.isPresent()) {
            carService.deleteCar(carId);
            return new ResponseEntity<>("Car successfully deleted", HttpStatus.ACCEPTED);
        } else {
            return new ResponseEntity<>("Car not found", HttpStatus.NOT_FOUND);
        }
    }
}
