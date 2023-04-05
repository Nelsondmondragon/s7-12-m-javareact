package com.nocountry.backend.service.impl;

import ch.qos.logback.core.subst.Token;
import com.nocountry.backend.dto.PaymentDto;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import com.stripe.exception.StripeException;

import com.nocountry.backend.repository.IPaymentRepository;
import com.nocountry.backend.service.IPaymentService;

import lombok.RequiredArgsConstructor;

import java.util.HashMap;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class PaymentServiceImpl implements IPaymentService {

    @Value("${stripe.key.secret}")
    private String apiKey;
    private final IPaymentRepository repository;
    public String createToken(PaymentDto paymentDto) throws StripeException {
            Stripe.apiKey = apiKey;
            Map<String, Object> tokenParams = new HashMap<>();
            Map<String, Object> cardParams = new HashMap<>();
            cardParams.put("number", paymentDto.getCardNumber());
            cardParams.put("exp_month", paymentDto.getExpMonth());
            cardParams.put("exp_year", paymentDto.getExpYear());
            cardParams.put("cvc", paymentDto.getCvc());
            tokenParams.put("card", cardParams);
            Token token = Token.create(tokenParams);
            return token.getId();
        }
        public String createCharge(PaymentDto paymentDto, String token) throws Exception {
            Stripe.apiKey = apiKey;
            Map<String, Object> chargeParams = new HashMap<>();
            chargeParams.put("amount", paymentDto.getAmount());
            chargeParams.put("currency", paymentDto.getCurrency());
            chargeParams.put("source", token);
            Charge charge = Charge.create(chargeParams);
            return charge.getId();
        }
    }

}
