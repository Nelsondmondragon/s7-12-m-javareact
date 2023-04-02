package com.nocountry.backend.mapper;
import com.nocountry.backend.dto.CarDto;
import com.nocountry.backend.model.Car;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;

import java.util.List;

@Mapper(componentModel = "spring")
public interface ICarMapper {

    CarDto CarToCarDto(Car car);
    Car CarDtoToCar(CarDto carDto);
    List<CarDto> CarEntityListToCarDTOList(List<Car> allCar);
    void updateCarFromDto(CarDto carDto, @MappingTarget Car car);


}
