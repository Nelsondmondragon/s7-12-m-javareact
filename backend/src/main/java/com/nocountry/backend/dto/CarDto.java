package com.nocountry.backend.dto;

import com.nocountry.backend.model.Category;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
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

    private Integer length;

    private Integer width;

    private Integer height;

    private String pickUpLocation;

    private Category category;
}
