package com.nocountry.backend.model;


import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.time.LocalTime;

@Getter
@Setter
@Entity
@Table(name = "cars")
@AllArgsConstructor
@NoArgsConstructor
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
