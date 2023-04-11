package com.nocountry.backend.model;

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

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "branches")
public class Branch {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_BRANCH")
    private Long id;

    @Column(name = "NAME")
    private String name;

    @Column(name = "FK_LOCATION")
    private String fkLocation;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "FK_LOCATION", referencedColumnName = "ID_LOCATION", insertable = false, updatable = false)
    private Location location;
}
