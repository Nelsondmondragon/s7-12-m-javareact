package com.nocountry.backend.model;

import java.util.Objects;

import org.hibernate.Hibernate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "CARS")
public class Car {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "IMAGE")
    private String image;

    @Column(name = "MODEL")
    private String model;

    @Column(name = "MAKE")
    private String make;

    @Column(name = "YEAR")
    private int year;

    @Column(name = "AIR")
    private boolean air;

    @Column(name = "GPS")
    private boolean gps;

    @Column(name = "PASSENGERS")
    private Integer passengers;

    @Column(name = "PATENT")
    private String patent;

    @Column(name = "AVAILABLE")
    private boolean available;

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o))
            return false;
        Car car = (Car) o;
        return id != null && Objects.equals(id, car.id);
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }
}

/*
 * private Category category;
 * private Booking booking;
 * private Double volume;
 * private Double Capacity;
 * private Integer length;
 * private Integer width;
 * private Integer height;
 */
