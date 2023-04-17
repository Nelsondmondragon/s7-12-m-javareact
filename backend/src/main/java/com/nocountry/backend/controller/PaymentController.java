package com.nocountry.backend.controller;

import org.cloudinary.json.JSONObject;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nocountry.backend.dto.PaymentDto;
import com.nocountry.backend.service.IPaymentService;
import com.stripe.exception.StripeException;
import com.stripe.model.PaymentIntent;

import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/payments")
@RequiredArgsConstructor
@SecurityRequirement(name = "bearerAuth")
@Tag(name = "Payments", description = "Payments description.")

public class PaymentController {

    private final IPaymentService paymentService;

    @PostMapping(value = "/intent", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> payment(@RequestBody PaymentDto paymentIntentDto) throws StripeException {
        PaymentIntent paymentIntent = paymentService.paymentIntent(paymentIntentDto);
        JSONObject responseJson = new JSONObject();
        responseJson.put("amount", paymentIntent.getAmount());
        responseJson.put("description", paymentIntent.getDescription());
        responseJson.put("currency", paymentIntent.getCurrency());
        responseJson.put("id", paymentIntent.getId());
        return new ResponseEntity<String>(responseJson.toString(), HttpStatus.OK);
    }

    @PostMapping(value = "/confirm/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> confirm(@PathVariable("id") String id) throws StripeException {
        PaymentIntent paymentIntent = paymentService.confirm(id);
        JSONObject responseJson = new JSONObject();
        responseJson.put("amount", paymentIntent.getAmount());
        responseJson.put("description", paymentIntent.getDescription());
        responseJson.put("currency", paymentIntent.getCurrency());
        return new ResponseEntity<String>(responseJson.toString(), HttpStatus.OK);
    }

    @PostMapping(value = "/cancel/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> cancel(@PathVariable("id") String id) throws StripeException {
        PaymentIntent paymentIntent = paymentService.cancel(id);
        String paymentStr = paymentIntent.toJson();
        return new ResponseEntity<String>(paymentStr, HttpStatus.OK);
    }
}
