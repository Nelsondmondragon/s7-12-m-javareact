package com.nocountry.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nocountry.backend.model.Payment;

public interface PaymentRepository extends JpaRepository<Payment, Long> {

        public Payment findByStripePaymentId(String stripePaymentId);
}