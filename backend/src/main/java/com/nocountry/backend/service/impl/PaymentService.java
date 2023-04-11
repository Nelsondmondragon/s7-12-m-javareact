package com.nocountry.backend.service.impl;

import org.springframework.stereotype.Service;

@Service
public class PaymentService {

    // @Value("${stripe.key.secret}")
    // String secretKey;

    // public PaymentIntent paymentIntent(PaymentDto paymentIntentDto) throws
    // StripeException {
    // Stripe.apiKey = secretKey;
    // List<String> paymentMethodTypes = new ArrayList();
    // paymentMethodTypes.add("card");
    // Map<String, Object> params = new HashMap<>();
    // params.put("amount", paymentIntentDto.getAmount());
    // params.put("currency", paymentIntentDto.getCurrency());
    // params.put("description", paymentIntentDto.getDescription());
    // params.put("payment_method_types", paymentMethodTypes);
    // return PaymentIntent.create(params);
    // }

    // public PaymentIntent confirm(String id) throws StripeException {
    // Stripe.apiKey = secretKey;
    // PaymentIntent paymentIntent = PaymentIntent.retrieve(id);
    // Map<String, Object> params = new HashMap<>();
    // params.put("payment_method", "pm_card_visa");
    // paymentIntent.confirm(params);
    // return paymentIntent;
    // }

    // public PaymentIntent cancel(String id) throws StripeException {
    // Stripe.apiKey = secretKey;
    // PaymentIntent paymentIntent = PaymentIntent.retrieve(id);
    // paymentIntent.cancel();
    // return paymentIntent;
    // }
}