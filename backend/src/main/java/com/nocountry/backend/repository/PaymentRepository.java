package com.nocountry.backend.repository;

import com.nocountry.backend.dto.PaymentDto;
import com.nocountry.backend.model.Payment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PaymentRepository extends JpaRepository<Payment, Long>{
        Payment findByStripePaymentId(String stripePaymentId);
}