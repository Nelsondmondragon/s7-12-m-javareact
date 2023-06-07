package com.nocountry.backend.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nocountry.backend.model.dto.customer.CustomerRegisterDto;
import com.nocountry.backend.model.dto.customer.CustomerRequestDto;
import com.nocountry.backend.model.dto.token.TokenDto;
import com.nocountry.backend.service.IAuthService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
@Tag(name = "Authentication", description = "Registration and login for MoveAr users.")
public class AuthController {

    private final IAuthService authService;

    @PostMapping("/register")
    @Operation(summary = "Register a user in MoveAr.")
    public ResponseEntity<?> register(@RequestBody CustomerRegisterDto request) {
        try {
            TokenDto response = authService.register(request);
            return new ResponseEntity<>(response, HttpStatus.CREATED);
        } catch (BadCredentialsException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.UNAUTHORIZED);
        }
    }

    @PostMapping("/login")
    @Operation(summary = "Login for a MoveAr user.")
    public ResponseEntity<?> login(@RequestBody CustomerRequestDto request) {
        try {
            TokenDto response = authService.login(request);
            return new ResponseEntity<>(response, HttpStatus.ACCEPTED);
        } catch (BadCredentialsException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.UNAUTHORIZED);
        }
    }
}
