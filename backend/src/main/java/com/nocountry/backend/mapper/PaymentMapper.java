package com.nocountry.backend.mapper;


import com.nocountry.backend.dto.PaymentDto2;
import com.nocountry.backend.model.Payment;

public class PaymentMapper {

        public static PaymentDto2 toDto(Payment payment) {
            PaymentDto2 paymentDto = new PaymentDto2();
            paymentDto.setIdPayments(payment.getIdPayments());
            paymentDto.setPaymentStatus(payment.getPaymentStatus());
            paymentDto.setPaymentDate(payment.getPaymentDate());
            paymentDto.setStripePaymentId(payment.getStripePaymentId());
            return paymentDto;
        }

        public static Payment toModel(PaymentDto2 paymentDto) {
            Payment payment = new Payment();
            payment.setIdPayments(paymentDto.getIdPayments());
            payment.setPaymentStatus(paymentDto.getPaymentStatus());
            payment.setPaymentDate(paymentDto.getPaymentDate());
            payment.setStripePaymentId(paymentDto.getStripePaymentId());
            return payment;
        }

}





