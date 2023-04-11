package com.nocountry.backend.service;

import java.time.LocalDateTime;
import java.util.List;

import com.nocountry.backend.dto.CarDto;

public interface ICarService {

        public List<CarDto> findAllCars();

        public List<CarDto> findCarsByFilters2(String model, String make, Integer year, Boolean air, Boolean gps,
                        Integer passengers, String pickUpLocation, Long idCategory, LocalDateTime startTime,
                        LocalDateTime endTime);

        public List<CarDto> findCarsByFilters(Long idCategory, String pickUpLocation, LocalDateTime startTime,
                        LocalDateTime endTime);

        public CarDto findCarById(Long carId);

        public CarDto saveCar(CarDto carDto);

        public CarDto updateCar(Long carId, CarDto carDto);

        public void deleteCar(Long carId);
}
