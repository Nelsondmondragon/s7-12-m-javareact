package com.nocountry.backend.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "customers")
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_CUSTOMER")
    private Long id;

    @Column(name = "FULL_NAME")
    private String name;

    @Column(name = "ADDRESS")
    private String address;

    @Column(name = "DNI")
    private String dni;

    @Column(name = "NO_LICENSE")
    private String license;

    @Column(name = "FK_USER")
    private Long fkUser;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "FK_USER", referencedColumnName = "id", insertable = false, updatable = false)
    private User user;

}
