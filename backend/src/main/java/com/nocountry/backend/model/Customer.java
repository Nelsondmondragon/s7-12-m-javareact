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
@Table(name = "CUSTOMERS")
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_CUSTOMER")
    private Long id;

    @Column(name = "FIRST_NAME")
    private String firstName;

    @Column(name = "LAST_NAME")
    private String lastName;

    @Column(name = "ADDRESS")
    private String address;

    @Column(name = "BIRTH_DATE")
    private Date birthdate;

    @Column(name = "PHONE")
    private String phone;

    @Column(name = "NATIONAL_ID_IMG_URL")
    private String nationalIdImgUrl;

    @Column(name = "DRIVER_LICENSE_IMG_URL")
    private String driverLicenceImgUrl;

    @Column(name = "FK_USER")
    private Long fkUser;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "FK_USER", referencedColumnName = "id", insertable = false, updatable = false)
    private User user;

}
