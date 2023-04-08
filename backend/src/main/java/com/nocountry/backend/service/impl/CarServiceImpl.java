package com.nocountry.backend.service.impl;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

import com.nocountry.backend.model.Booking;
import com.nocountry.backend.repository.IBookingRepository;
import com.nocountry.backend.service.IBookingService;
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

    private final IBookingRepository bookingRepository;

    private final IBookingService bookingService;

    private final ICarMapper carMapper;

    @Override
    public List<CarDto> findAllCars() {
        return carMapper.CarEntityListToCarDTOList(carRepository.findAll());
    }

    @Override
    public List<CarDto> findAllCarsByFilters(
            Long idCategory,
            String pickUpLocation,
            LocalDateTime startTime,
            LocalDateTime endTime
    ) {

        //trae todos los autos que no estan en reservas por categoria y Location
        List<Car> allCars = carRepository.findAllByCategory_IdAndPickUpLocation( idCategory, pickUpLocation);

        //trae todas las reservas por Location
        List<Booking> reservasPorUbicacionRetiro = bookingRepository.findAllByPickUpLocation(pickUpLocation);
        List<Booking> reservasFinales = new ArrayList<>();
        for (Booking book : reservasPorUbicacionRetiro){
               if (bookingService.validateDateBooking(startTime,endTime,book)){
                   reservasFinales.add(book);
               }
        }

        //filtrado de autos
        List<Car> carsFiltered = deleteCarsWithBooking(allCars,reservasFinales);
        return carMapper.CarEntityListToCarDTOList(carsFiltered);
    }

    public List<Car> deleteCarsWithBooking(List<Car> cars, List<Booking> bookings) {

        Set<Long> idsBookingCars = bookings.stream().map(Booking::getFkCar).collect(Collectors.toSet());
        List<Car> availableCars = new ArrayList<>();
        for (Car car : cars) {
            if (!idsBookingCars.contains(car.getId())) {
                availableCars.add(car);
            }
        }
        return availableCars;
    }

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
