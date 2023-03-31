package com.nocountry.backend.dto;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CarDto {

    private Long id;

    private String image;

    private String model;

    private String make;

    private int year;

    private boolean air;

    private boolean gps;

    private Integer passengers;

    private String patent;

    private boolean Available;
}
