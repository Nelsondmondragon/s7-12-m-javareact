package com.nocountry.backend.dto;

import com.nocountry.backend.model.Car;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CategoryDto {

    private Long id;

    private Double volume;

    private Double Capacity;

    private Integer length;

    private Integer width;

    private Integer height;

}
