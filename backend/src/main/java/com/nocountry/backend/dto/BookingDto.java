package com.nocountry.backend.dto;

import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.nocountry.backend.model.Car;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Schema(description = "Reservations must have a one-hour gap between each other.")
public class BookingDto {

    private Long id;

    @Schema(example = "2023-04-05T13:30")
    private LocalDateTime startTime;

    @Schema(example = "2023-04-05T16:30")
    private LocalDateTime endTime;

    @Schema(example = "CABA")
    private String pickUpLocation;

    @Schema(example = "CABA")
    private String dropOffLocation;

    @Schema(example = "false")
    private Boolean assignedDriver;

    @Schema(example = "false")
    private Boolean helperPawn;

    @JsonProperty("carId")
    @Schema(example = "1")
    private Long fkCar;

    @JsonProperty("customerId")
    @Schema(example = "2")
    private Long fkCustomer;

    private Car car;
}
