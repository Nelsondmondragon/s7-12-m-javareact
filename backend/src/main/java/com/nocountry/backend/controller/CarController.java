package com.nocountry.backend.controller;

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.nocountry.backend.dto.CarDto;
import com.nocountry.backend.service.ICarService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/cars")
@RequiredArgsConstructor
@Tag(name = "Cars", description = "Management of cars available for rent in MoveAr. It allows creating, modifying, and deleting vehicles, as well as obtaining detailed information about them.")
@SecurityRequirement(name = "bearerAuth")
public class CarController {

    private final ICarService carService;

    @GetMapping("/all")
    @Operation(summary = "Get all cars.")
    public ResponseEntity<List<CarDto>> getAllCars() {
        var cars = carService.findAllCars();
        if (cars.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(cars, HttpStatus.OK);
        }
    }

    @GetMapping("/filters")
    @Operation(summary = "Get all cars according to the specified filters. startTime and endTime cannot be null.")
    public ResponseEntity<List<CarDto>> getCarsByFilters(
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
        var cars = carService.findCarsByFilters(model, make, year, air, gps, passengers, pickUpLocation,
                idCategory, startTime, endTime);
        if (cars.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(cars, HttpStatus.OK);
        }
    }

    @GetMapping("/getbyfilters")
    public ResponseEntity<List<CarDto>> getAllCarsByFilter(
            @RequestParam(required = false) Long id_category,
            @RequestParam(required = true) String pickUpLocation,
            @RequestParam(required = true) LocalDateTime startTime,
            @RequestParam(required = true) LocalDateTime endTime) {
        List<CarDto> cars = carService.findAllCarsByFilters(id_category, pickUpLocation, startTime, endTime);
        if (cars.isEmpty()) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.ok(cars);
        }
    }

    @GetMapping("/{carId}")
    @Operation(summary = "Get a car by Id.")
    public ResponseEntity<CarDto> getCarById(@PathVariable Long carId) {
        return new ResponseEntity<>(carService.findCarById(carId), HttpStatus.OK);
    }

    @PostMapping("/create")
    @Operation(summary = "Create a new car.")
    public ResponseEntity<CarDto> createCar(@RequestBody CarDto carDto) {
        return new ResponseEntity<>(carService.saveCar(carDto), HttpStatus.OK);
    }

    @PutMapping("/{carId}/update")
    @Operation(summary = "Update an existing car by Id.")
    public ResponseEntity<CarDto> updateCar(@PathVariable Long carId, @RequestBody CarDto carDto) {
        return new ResponseEntity<>(carService.updateCar(carId, carDto), HttpStatus.OK);
    }

    @PatchMapping(value = "/{carId}/image", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    @Operation(summary = "Update car image by Id.")
    public ResponseEntity<String> updateCarImage(
            @PathVariable Long carId,
            @RequestParam(name = "file") MultipartFile file) throws IOException {
        carService.updateCarImage(carId, file);
        return new ResponseEntity<>("Car Image has been successfully updated", HttpStatus.OK);
    }

    @DeleteMapping("/{carId}/delete")
    @Operation(summary = "Delete an existing car by Id.")
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
