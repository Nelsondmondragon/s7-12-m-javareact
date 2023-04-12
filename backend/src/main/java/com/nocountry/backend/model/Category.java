package com.nocountry.backend.model;

import java.math.BigDecimal;

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
@Table(name = "CATEGORIES")
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_CATEGORY")
    private Long id;

    @Column(name = "NAME")
    private String name;

    @Column(name = "VOLUME")
    private Double volume;

    @Column(name = "CAPACITY_LIMIT")
    private Double capacityLimit;

    @Column(name = "HOURLY_PRICE")
    private BigDecimal hourlyPrice;
}
