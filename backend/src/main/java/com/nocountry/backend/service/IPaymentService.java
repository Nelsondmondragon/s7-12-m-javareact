package com.nocountry.backend.service;

import com.nocountry.backend.dto.payment.PaymentDto;
import com.stripe.exception.StripeException;
import com.stripe.model.PaymentIntent;

public interface IPaymentService {

    public PaymentIntent paymentIntent(PaymentDto paymentIntentDto) throws StripeException;

    public PaymentIntent confirm(String id) throws StripeException;

    public PaymentIntent cancel(String id) throws StripeException;
}
