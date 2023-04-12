package com.nocountry.backend.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.security.SecurityRequirement;

@RestController
@RequestMapping("/api/v1/payment")
@SecurityRequirement(name = "bearerAuth")
public class PaymentController {

    // @Autowired
    // PaymentService paymentService;

    // @PostMapping("/paymentintent")
    // public ResponseEntity<String> payment(@RequestBody PaymentDto
    // paymentIntentDto) throws StripeException {

    // PaymentIntent paymentIntent = paymentService.paymentIntent(paymentIntentDto);
    // String paymentStr = paymentIntent.toJson();
    // return new ResponseEntity<String>(paymentStr, HttpStatus.OK);
    // }

    // @PostMapping("/confirm/{id}")
    // public ResponseEntity<String> confirm(@PathVariable("id") String id) throws
    // StripeException {
    // PaymentIntent paymentIntent = paymentService.confirm(id);
    // String paymentStr = paymentIntent.toJson();
    // return new ResponseEntity<String>(paymentStr, HttpStatus.OK);
    // }

    // @PostMapping("/cancel/{id}")
    // public ResponseEntity<String> cancel(@PathVariable("id") String id) throws
    // StripeException {
    // PaymentIntent paymentIntent = paymentService.cancel(id);
    // String paymentStr = paymentIntent.toJson();
    // return new ResponseEntity<String>(paymentStr, HttpStatus.OK);
    // }
}
