package com.nocountry.backend.model;

import java.time.LocalDateTime;
import java.util.List;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
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

    @Column(name = "FK_USER")
    private Long fkUser;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "FK_USER", referencedColumnName = "ID_USER", insertable = false, updatable = false)
    private User user;

    @OneToMany(mappedBy = "customer", cascade = CascadeType.ALL)
    private List<Booking> bookings;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "FK_LOCATION", referencedColumnName = "ID_LOCATION", insertable = false, updatable = false)
    private Location location;
}
