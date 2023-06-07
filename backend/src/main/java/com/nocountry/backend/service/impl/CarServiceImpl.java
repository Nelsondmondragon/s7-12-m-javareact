package com.nocountry.backend.service.impl;

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

import org.hibernate.ObjectDeletedException;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.cloudinary.utils.ObjectUtils;
import com.nocountry.backend.handler.ErrorCode;
import com.nocountry.backend.handler.Exceptions.CarNotFoundException;
import com.nocountry.backend.model.dto.car.CarDto;
import com.nocountry.backend.model.entity.Booking;
import com.nocountry.backend.model.entity.Car;
import com.nocountry.backend.model.entity.MediaResource;
import com.nocountry.backend.model.mapper.ICarMapper;
import com.nocountry.backend.repository.IBookingRepository;
import com.nocountry.backend.repository.ICarRepository;
import com.nocountry.backend.service.IBookingService;
import com.nocountry.backend.service.ICarService;
import com.nocountry.backend.service.ICloudinaryService;
import com.nocountry.backend.service.spec.CarSpecification;

import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CarServiceImpl implements ICarService {

    private final ICarRepository carRepository;

    private final ICarMapper carMapper;

    private final IBookingRepository bookingRepository;

    private final IBookingService bookingService;

    private final ICloudinaryService cloudinaryService;

    @Override
    public List<CarDto> findAllCars() {
        return carMapper.CarEntityListToCarDTOList(carRepository.findAll());

    }

    @Override
    public List<CarDto> findCarsByFilters(String model, String make, Integer year, Boolean air, Boolean gps,
                                          Integer passengers, String idLocation, Long idCategory, LocalDateTime startTime,
                                          LocalDateTime endTime) {

        Specification<Car> spec = Specification.where(null);

        if (model != null) {
            spec = spec.and(CarSpecification.hasModel(model));
        }

        if (make != null) {
            spec = spec.and(CarSpecification.hasMake(make));
        }

        if (year != null) {
            spec = spec.and(CarSpecification.hasYear(year));
        }

        if (air != null) {
            spec = spec.and(CarSpecification.hasAir(air));
        }

        if (gps != null) {
            spec = spec.and(CarSpecification.hasGps(gps));
        }

        if (passengers != null) {
            spec = spec.and(CarSpecification.hasPassengers(passengers));
        }

        if (idLocation != null) {
            spec = spec.and(CarSpecification.hasPickUpLocation(idLocation));
        }

        if (idCategory != null) {
            spec = spec.and(CarSpecification.hasCategory(idCategory));
        }

        var carsFiltered = carRepository.findAll(spec);
        return carMapper.CarEntityListToCarDTOList(carsFiltered);
    }

    @Override
    public List<CarDto> findAllCarsByFilters(
            Long idCategory,
            String idLocation,
            LocalDateTime startTime,
            LocalDateTime endTime) {

        // trae todos los autos que no estan en reservas por categoria y Location
        List<Car> allCars = carRepository.findAllByCategoryIdAndLocationId(idCategory,
                idLocation);

        // trae todas las reservas por Location
        List<Booking> reservasPorUbicacionRetiro = bookingRepository.findAll();
        List<Booking> reservasFinales = new ArrayList<>();
        for (Booking book : reservasPorUbicacionRetiro) {
            if (bookingService.bookingIsActiveByDate(startTime, endTime, book)) {
                reservasFinales.add(book);
            }
        }

        // filtrado de autos
        List<Car> carsFiltered = deleteCarsWithBooking(allCars, reservasFinales);
        return carMapper.CarEntityListToCarDTOList(carsFiltered);
    }

    @Override
    public CarDto findCarById(Long carId) {
        Optional<Car> carEntity = carRepository.findById(carId);
        if (carEntity.isPresent()) {
            return carMapper.CarToCarDto(carEntity.get());
        } else {
            throw new CarNotFoundException(ErrorCode.CAR_NOT_FOUND);
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

    private List<Car> deleteCarsWithBooking(List<Car> cars, List<Booking> bookings) {
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
    public void updateCarImage(Long carId, MultipartFile file) throws IOException {
        var car = carRepository.findById(carId).orElseThrow();
        var fileName = car.getModel();
        Map options = ObjectUtils.asMap(
                "folder", "images/",
                "overwrite", true,
                "resource_type", "image",
                "original_filename", fileName);
        MediaResource response = cloudinaryService.getMediaResource(file, fileName, options);
        car.setImageResource(response);
        carRepository.save(car);
    }
}
