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
@Table(name = "CARDS")

public class Card {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_CARD")
    private Long id;


    @Column(name = "NUMBER_CARD")
    private String numberCard;

    @Column(name = "FULL_NAME")
    private String fullName;

    @Column(name = "DATE_EXPIRATION")
    private String date_expiration;

    @Column(name = "CVV")
    private String cvv;

    @Column(name = "FK_CUSTOMER")
    private Long fkCustomer;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "FK_CUSTOMER", referencedColumnName = "ID_CUSTOMER",
            insertable = false, updatable = false)
    private Customer customer;

}
