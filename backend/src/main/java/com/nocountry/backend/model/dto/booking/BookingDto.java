package com.nocountry.backend.model.dto.booking;

import java.math.BigDecimal;
import java.time.LocalDateTime;

import com.nocountry.backend.model.dto.car.CarDto;
import com.nocountry.backend.model.dto.customer.CustomerDetailsDto;

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

    private String pickUpLocation;

    @Schema(example = "Ciudad Autonoma de Buenos Aires")
    private String dropOffLocation;

    @Schema(example = "false")
    private Boolean assignedDriver;

    @Schema(example = "false")
    private Boolean helperPawn;

    private Boolean active;

    private CarDto car;

    private CustomerDetailsDto customer;

    private BigDecimal totalPrice;
}
