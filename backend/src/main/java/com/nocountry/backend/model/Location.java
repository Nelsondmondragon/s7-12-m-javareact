package com.nocountry.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "LOCATIONS")
public class Location {
    @Id
//    @GeneratedValue(strategy = GenerationType.)
    @Column(name = "ID_LOCATION")
    private String id;

    @Column(name = "NAME")
    private String name;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "location")
    private List<Car> cars;
}
