package com.nocountry.backend.model;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.Builder.Default;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "CARS")
public class Car {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_CAR")
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

    @Default
    @Column(name = "AVAILABLE")
    private boolean available = true;

    @OneToMany(mappedBy = "car", cascade = CascadeType.ALL)
    private List<Booking> bookings;
}
