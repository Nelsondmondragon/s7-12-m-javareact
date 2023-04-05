package com.nocountry.backend.model;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "CATEGORIES")
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_CATEGORY", nullable = false)
    private Long id;

    private Double volume;

    private Double capacity;

    private Integer length;

    private Integer width;

    private Integer height;
}
