package com.nocountry.backend.service;


import com.nocountry.backend.dto.PaymentDto;
import com.stripe.exception.StripeException;
import com.stripe.model.PaymentIntent;

public interface IPaymentService {
    PaymentIntent paymentIntent(PaymentDto paymentIntentDto) throws StripeException;
    PaymentIntent confirm(String id) throws StripeException;
    PaymentIntent cancel(String id) throws StripeException;
}
