package com.nocountry.backend.service.spec;

import org.springframework.data.jpa.domain.Specification;

import com.nocountry.backend.model.entity.Car;

public class CarSpecification {

    public static Specification<Car> hasModel(String model) {
        return (root, query, cb) -> cb.equal(root.get("model"), model);
    }

    public static Specification<Car> hasMake(String make) {
        return (root, query, cb) -> cb.equal(root.get("make"), make);
    }

    public static Specification<Car> hasYear(Integer year) {
        return (root, query, cb) -> cb.equal(root.get("year"), year);
    }

    public static Specification<Car> hasAir(Boolean air) {
        return (root, query, cb) -> cb.equal(root.get("air"), air);
    }

    public static Specification<Car> hasGps(Boolean gps) {
        return (root, query, cb) -> cb.equal(root.get("gps"), gps);
    }

    public static Specification<Car> hasPassengers(Integer passengers) {
        return (root, query, cb) -> cb.equal(root.get("passengers"), passengers);
    }

    public static Specification<Car> hasPickUpLocation(String pickUpLocation) {
        return (root, query, cb) -> cb.equal(root.get("idLocation"), pickUpLocation);
    }

    public static Specification<Car> hasCategory(Long categoryId) {
        return (root, query, cb) -> cb.equal(root.get("category").get("id"), categoryId);
    }
}
