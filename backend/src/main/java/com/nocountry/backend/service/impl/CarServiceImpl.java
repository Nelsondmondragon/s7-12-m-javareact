package com.nocountry.backend.service.impl;

import java.util.List;
import java.util.Optional;

import org.hibernate.ObjectDeletedException;
import org.springframework.stereotype.Service;

import com.nocountry.backend.dto.CarDto;
import com.nocountry.backend.mapper.ICarMapper;
import com.nocountry.backend.model.Car;
import com.nocountry.backend.repository.ICarRepository;
import com.nocountry.backend.service.ICarService;

import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CarServiceImpl implements ICarService {

    private final ICarRepository carRepository;

    private final ICarMapper carMapper;

    @Override
    public List<CarDto> findAllCars() {
        return carMapper.CarEntityListToCarDTOList(carRepository.findAll());
    }

    // @Override
    // public List<CarDto> findAllCarsByCategory(Long categoryId) {
    // return
    // carMapper.CarEntityListToCarDTOList(carRepository.findAllByCategory_Id(categoryId));
    // }

    @Override
    public CarDto findCarById(Long carId) {
        Optional<Car> carEntity = carRepository.findById(carId);
        if (carEntity.isPresent()) {
            return carMapper.CarToCarDto(carEntity.get());
        } else {
            throw new EntityNotFoundException("Car not found with id: " + carId);
        }

    }

    @Override
    public CarDto saveCar(CarDto carDto) {
        return carMapper.CarToCarDto(carRepository.save(carMapper.CarDtoToCar(carDto)));
    }

    @Override
    public CarDto updateCar(Long carId, CarDto carDto) {
        Optional<Car> carEntity = carRepository.findById(carId);
        if (carEntity.isPresent()) {
            Car car = carEntity.get();
            carMapper.updateCarFromDto(carDto, car);
            Car updatedCar = carRepository.save(car);
            return carMapper.CarToCarDto(updatedCar);
        } else {
            throw new EntityNotFoundException("Car not found with id: " + carId);
        }
    }

    @Override
    public void deleteCar(Long carId) {
        Optional<Car> car = carRepository.findById(carId);
        if (car.isPresent()) {
            carRepository.delete(car.get());
        } else {
            throw new ObjectDeletedException("car with ID " + carId + " can't be deleted.", carId, "Car");
        }
    }
}
