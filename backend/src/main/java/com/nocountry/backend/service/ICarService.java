package com.nocountry.backend.service;

import com.nocountry.backend.dto.CarDto;

import java.util.List;

public interface ICarService {

    public List<CarDto> findAllCars();

    List<CarDto> findAllCarsByCategory(Long categoryId);

    public CarDto findCarById(Long carId);

    public CarDto saveCar(CarDto carDto);

    public CarDto updateCar(Long carId, CarDto carDto);

    public void deleteCar(Long carId);

}
