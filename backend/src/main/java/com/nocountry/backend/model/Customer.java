package com.nocountry.backend.model;

import jakarta.persistence.*;
import lombok.*;

import java.sql.Date;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "customers")
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_CUSTOMER")
    private Long id;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "ADDRESS")
    private String address;

    private Date birthdate;

    @Column(name = "DNI")
    private String dni;

    @Column(name = "NO_LICENSE")
    private String license;

    @Column(name = "national_id_img_url")
    private String nationalIdImgUrl;


    @Column(name = "driver_licence_img_url")
    private String driverLicenceImgUrl;

    @Column(name = "FK_USER")
    private Long fkUser;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "FK_USER", referencedColumnName = "id", insertable = false, updatable = false)
    private User user;

}
