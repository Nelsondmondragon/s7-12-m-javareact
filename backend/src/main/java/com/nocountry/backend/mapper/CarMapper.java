package com.nocountry.backend.mapper;

import com.nocountry.backend.dto.CarDto;
import com.nocountry.backend.model.Car;
import com.nocountry.backend.util.enums.GenericMapper;
import org.springframework.stereotype.Component;

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
}
