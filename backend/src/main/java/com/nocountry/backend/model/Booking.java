package com.nocountry.backend.model;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.Builder.Default;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "BOOKINGS")
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_BOOKING")
    private Long id;

    @Column(name = "START_DATE")
    private LocalDateTime startTime;

    @Column(name = "END_DATE")
    private LocalDateTime endTime;

    @Column(name = "PICK_UP_LOCATION")
    private String pickUpLocation;

    @Column(name = "DROP_OFF_LOCATION")
    private String dropOffLocation;

    @Column(name = "ASSIGNED_DRIVER")
    private Boolean assignedDriver;

    @Column(name = "HELPER_PAWN")
    private Boolean helperPawn;

    @Column(name = "ACTIVE")
    @Default
    private Boolean active = true;

    @Column(name = "FK_CAR")
    private Long fkCar;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "FK_CAR", referencedColumnName = "ID_CAR", insertable = false, updatable = false)
    private Car car;

    @Column(name = "FK_CUSTOMER")
    private Long fkCustomer;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "FK_CUSTOMER", referencedColumnName = "ID_CUSTOMER", insertable = false, updatable = false)
    private Customer customer;
}