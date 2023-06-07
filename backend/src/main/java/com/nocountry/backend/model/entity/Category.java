package com.nocountry.backend.model.entity;

import java.math.BigDecimal;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;

@Getter
@Setter
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

    @Column(name = "DEFAULT_IMAGE_URL")
    private String defaultImageUrl;

    @Column(name = "VOLUME")
    private Double volume;

    @Column(name = "CAPACITY_LIMIT")
    private Double capacityLimit;

    @Column(name = "HOURLY_PRICE")
    private BigDecimal hourlyPrice;
}
