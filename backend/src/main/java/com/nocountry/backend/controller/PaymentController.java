package com.nocountry.backend.controller;

import com.nocountry.backend.dto.PaymentDto;
import com.nocountry.backend.service.impl.PaymentServiceImpl;
import com.stripe.exception.StripeException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nocountry.backend.service.IPaymentService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/payments")
@RequiredArgsConstructor
public class PaymentController {

    @Autowired
    private final PaymentServiceImpl service;


    @PostMapping("/pay")
    public ResponseEntity<String> charge(@RequestBody PaymentDto paymentDto) throws StripeException{
        String token = service.createToken(paymentDto);
        String chargeId = service.createCharge(paymentDto, token);
        return new ResponseEntity<>(chargeId, HttpStatus.OK);
    }

}



