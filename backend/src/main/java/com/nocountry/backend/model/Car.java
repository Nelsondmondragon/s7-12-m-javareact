package com.nocountry.backend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
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
    @Column(name = "ID_CAR")
    private Long id;

    @OneToOne
    @JoinColumn(name = "ID_MEDIA")
    private MediaResource imageResource;

    @Column(name = "MODEL")
    private String model;

    @Column(name = "MAKE")
    private String make;

    @Column(name = "YEAR")
    private Integer year;

    @Column(name = "AIR")
    private Boolean air;

    @Column(name = "GPS")
    private Boolean gps;

    @Column(name = "PASSENGERS")
    private Integer passengers;

    @Column(name = "PATENT")
    private String patent;

    @Column(name = "LENGTH")
    private Integer length;

    @Column(name = "WIDTH")
    private Integer width;

    @Column(name = "HEIGHT")
    private Integer height;

    @Column(name = "PICK_UP_LOCATION")
    private String pickUpLocation;

    @ManyToOne
    @JoinColumn(name = "ID_CATEGORY")
    private Category category;
}
