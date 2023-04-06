package com.nocountry.backend.service;

import java.util.List;

import com.nocountry.backend.dto.CarDto;

public interface ICarService {

    public List<CarDto> findAllCars();

    // public List<CarDto> findAllCarsByCategory(Long categoryId);

    public CarDto findCarById(Long carId);

    public CarDto saveCar(CarDto carDto);

    public CarDto updateCar(Long carId, CarDto carDto);

    public void deleteCar(Long carId);
}
