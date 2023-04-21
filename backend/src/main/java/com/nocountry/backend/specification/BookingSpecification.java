package com.nocountry.backend.specification;

import java.time.LocalDateTime;

import org.springframework.data.jpa.domain.Specification;

import com.nocountry.backend.model.Booking;

public class BookingSpecification {

    public static Specification<Booking> hasStartTime(LocalDateTime startTime) {
        return (root, query, cb) -> cb.equal(root.get("startTime"), startTime);
    }

    public static Specification<Booking> hasEndTime(LocalDateTime endTime) {
        return (root, query, cb) -> cb.equal(root.get("endTime"), endTime);
    }

    public static Specification<Booking> hasPickUpLocation(String pickUpLocation) {
        return (root, query, cb) -> cb.equal(root.get("pickUpLocation"), pickUpLocation);
    }

    public static Specification<Booking> hasDropOffLocation(String dropOffLocation) {
        return (root, query, cb) -> cb.equal(root.get("dropOffLocation"), dropOffLocation);
    }

    public static Specification<Booking> hasAssignedDriver(Boolean assignedDriver) {
        return (root, query, cb) -> cb.equal(root.get("assignedDriver"), assignedDriver);
    }

    public static Specification<Booking> hasHelperPawn(Boolean helperPawn) {
        return (root, query, cb) -> cb.equal(root.get("helperPawn"), helperPawn);
    }

    public static Specification<Booking> hasActive(Boolean active) {
        return (root, query, cb) -> cb.equal(root.get("active"), active);
    }

    public static Specification<Booking> hasFkCar(Long fkCar) {
        return (root, query, cb) -> cb.equal(root.get("fkCar"), fkCar);
    }

    public static Specification<Booking> hasFkCustomer(Long fkCustomer) {
        return (root, query, cb) -> cb.equal(root.get("fkCustomer"), fkCustomer);
    }
}
