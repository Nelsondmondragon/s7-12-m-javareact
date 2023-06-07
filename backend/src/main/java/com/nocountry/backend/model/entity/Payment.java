package com.nocountry.backend.model.entity;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;

@Getter
@Setter
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "payments")
public class Payment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_PAYMENT")
    private long idPayments;

    @Column(name = "PAYMENT_STATUS")
    private String paymentStatus;

    @Column(name = "PAYMENT_DATE")
    private Date paymentDate;

    @Column(name = "STRIPE_PAYMENT_ID")
    private String stripePaymentId;
}
