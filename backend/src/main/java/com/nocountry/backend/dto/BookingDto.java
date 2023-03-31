package com.nocountry.backend.dto;


import jakarta.persistence.Column;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.time.LocalTime;

@Getter
@Setter
public class BookingDto {

    private LocalTime startTime;
    private LocalTime endTime;
    private LocalDateTime startDate;
    private LocalDateTime endDate;
    private LocalDateTime date;
}
