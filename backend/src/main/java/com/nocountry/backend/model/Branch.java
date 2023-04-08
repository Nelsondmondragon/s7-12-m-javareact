package com.nocountry.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "branches")
public class Branch {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @Column(name = "FK_LOCATION")
    private String fkLocation;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "FK_LOCATION", referencedColumnName = "ID_LOCATION", insertable = false, updatable = false)
    private Location location;
}
