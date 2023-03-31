package com.nocountry.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.jpa.AvailableHints;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Car {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    private String image;

    @Column(name = "model")
    private String model;

    @Column(name = "make")
    private String make;

    private int year;

    private boolean air;

    private boolean gps;

    private Integer passengers;

    private String patent;

    private boolean Available;

/*
    private Category category;

    private Booking booking;

    private Double volume;
    private Double Capacity;
    private Integer length;
    private Integer width;
    private Integer height;

    */

}
