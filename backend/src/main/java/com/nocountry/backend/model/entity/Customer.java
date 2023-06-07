package com.nocountry.backend.model.entity;

import java.time.LocalDateTime;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "CUSTOMERS")
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_CUSTOMER")
    private Long id;

    @Column(name = "FULL_NAME")
    private String fullName;

    @Column(name = "ADDRESS")
    private String address;

    @Column(name = "DNI")
    private String dni;

    @Column(name = "NUMBER_LICENSE")
    private String numberLicence;

    @Column(name = "DATE_EXPIRATION")
    private LocalDateTime dateExpiration;

    @Column(name = "FK_LOCATION")
    private String fkLocation;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "FK_LOCATION", referencedColumnName = "ID_LOCATION", insertable = false, updatable = false)
    private Location location;

    @Column(name = "FK_USER")
    private Long fkUser;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "FK_USER", referencedColumnName = "ID_USER", insertable = false, updatable = false)
    private User user;

    @OneToOne(mappedBy = "customer")
    private Card card;

    @OneToMany(mappedBy = "customer", cascade = CascadeType.ALL)
    private List<Booking> bookings;
}
