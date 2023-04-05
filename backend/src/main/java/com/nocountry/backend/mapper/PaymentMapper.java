package com.nocountry.backend.mapper;

import com.nocountry.backend.dto.PaymentDto;
import com.nocountry.backend.model.Payment;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class PaymentMapper {
    public Payment toPayment(PaymentDto paymentDto) {
            Payment payment = new Payment();
            payment.setPaymentType(paymentDto.getPaymentType());
            payment.setPaymentDate(new Date());
            payment.setStatus("pending");

            return payment;
        }

}
