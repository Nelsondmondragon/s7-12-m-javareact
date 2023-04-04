package com.nocountry.backend.model;

import java.time.LocalDateTime;
import java.time.LocalTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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
@Table(name = "BOOKINGS")
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "START_TIME")
    private LocalTime startTime;

    @Column(name = "END_TIME")
    private LocalTime endTime;

    @Column(name = "START_DATE")
    private LocalDateTime startDate;

    @Column(name = "END_DATE")
    private LocalDateTime endDate;

    @Column(name = "DATE")
    private LocalDateTime date;

    @Column(name = "STATUS")
    private boolean status;

    @Column(name = "FK_CUSTOMER")
    private Long fkCustomer;

    @Column(name = "FK_CARS")
    private Long fkCars;

    @Column(name = "FK_PAYMENT")
    private Long fkPayment;
}

// id customer
// id car
// startdate
// enddate
// startdate
// enddate
// bookingdate
// status
