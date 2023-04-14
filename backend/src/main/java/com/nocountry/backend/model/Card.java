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
    @JoinColumn(name = "FK_CUSTOMER", referencedColumnName = "ID_CUSTOMER", insertable = false, updatable = false)
    private Customer customer;
}
