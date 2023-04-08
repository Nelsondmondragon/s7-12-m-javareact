package com.nocountry.backend.model;

import java.util.List;

import jakarta.persistence.*;
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

    @Column(name = "LENGTH")
    private Integer length;

    @Column(name = "WIDTH")
    private Integer width;

    @Column(name = "HEIGHT")
    private Integer height;

    @Column(name = "PICK_UP_LOCATION")
    private String pickUpLocation;

    @Column(name = "AVAILABLE")
    private boolean available;

    @ManyToOne
    @JoinColumn(name = "id_category")
    private Category category;

/*    @OneToMany(mappedBy = "car", cascade = CascadeType.ALL)
    private List<Booking> bookings;*/
}
