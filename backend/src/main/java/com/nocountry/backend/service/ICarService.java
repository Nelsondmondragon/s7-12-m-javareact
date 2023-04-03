package com.nocountry.backend.service;

import com.nocountry.backend.dto.CarDto;

import java.util.List;

public interface ICarService {

    List<CarDto> getCars();
    CarDto saveCar(CarDto carDto);
    CarDto getCarById(Long id);
    CarDto updateCarById(Long id, CarDto carDetailsDto);
    void deleteCar(Long id);


}
