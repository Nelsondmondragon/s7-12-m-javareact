package com.nocountry.backend.mapper;

import com.nocountry.backend.dto.CarDto;
import com.nocountry.backend.model.Car;
import com.nocountry.backend.util.enums.GenericMapper;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Component
public class CarMapper {
    private final GenericMapper<Car, CarDto> carMapper;

    public CarMapper(GenericMapper<Car, CarDto> carMapper) {
        this.carMapper = carMapper;
    }

    public CarDto CarEntityToCarDTO(Car car) {
        return carMapper.mapToDto(car);
    }

    public Car CarDTOToCarEntity(CarDto carDto) {
        return carMapper.mapToEntity(carDto);
    }

    public List<CarDto> CarEntityListToCarDTOList(List<Car> allCar) {
        return allCar.stream().map(this::CarEntityToCarDTO).collect(Collectors.toList());
    }
    public List<Car> CarDTOListToCarEntityList(List<CarDto> carDtoList) {
        return carDtoList.stream().map(this::CarDTOToCarEntity).collect(Collectors.toList());
    }

    public void updateCarFromDto(CarDto carDto, Car car, Class<Car> carClass){
        carMapper.updateFromDto(carDto,car,Car.class);
    };


}
