package com.nocountry.backend.dto;

import java.time.LocalDateTime;
import java.time.LocalTime;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class BookingDto {

    private LocalTime startTime;

    private LocalTime endTime;

    private LocalDateTime startDate;

    private LocalDateTime endDate;

    private LocalDateTime date;
}
