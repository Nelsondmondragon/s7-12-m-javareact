package com.nocountry.backend.dto;

import java.math.BigDecimal;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CategoryDto {

    private Long id;

    @Schema(example = "Other")
    private String name;

    @Schema(example = "5.0")
    private Double volume;

    @Schema(example = "500.0")
    private Double capacityLimit;

    @Schema(example = "20000.00")
    private BigDecimal hourlyPrice;
}