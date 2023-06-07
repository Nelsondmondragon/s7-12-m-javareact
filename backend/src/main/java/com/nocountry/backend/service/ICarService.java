package com.nocountry.backend.service;

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.nocountry.backend.model.dto.car.CarDto;

public interface ICarService {

    public List<CarDto> findAllCars();

    public List<CarDto> findCarsByFilters(String model, String make, Integer year, Boolean air, Boolean gps,
            Integer passengers, String idLocation, Long idCategory, LocalDateTime startTime,
            LocalDateTime endTime);

    public List<CarDto> findAllCarsByFilters(Long id_category, String idLocation, LocalDateTime startTime,
            LocalDateTime endTime);

    public CarDto findCarById(Long carId);

    public CarDto saveCar(CarDto carDto);

    public CarDto updateCar(Long carId, CarDto carDto);

    public void updateCarImage(Long carId, MultipartFile file) throws IOException;

    public void deleteCar(Long carId);
}
