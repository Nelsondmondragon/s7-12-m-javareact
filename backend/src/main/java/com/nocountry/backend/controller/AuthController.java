package com.nocountry.backend.controller;

import com.nocountry.backend.dto.CustomerDetailsDto;
import com.nocountry.backend.dto.CustomerDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nocountry.backend.dto.AuthRequestDto;
import com.nocountry.backend.dto.AuthResponseDto;
import com.nocountry.backend.service.IAuthService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthController {

    private final IAuthService service;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody CustomerDetailsDto request) {
        try {
            AuthResponseDto response = service.register(request);
            return new ResponseEntity<>(response, HttpStatus.CREATED);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.CONFLICT);
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody AuthRequestDto request) {
        try {
            AuthResponseDto response = service.login(request);
            return new ResponseEntity<>(response, HttpStatus.ACCEPTED);
        } catch (BadCredentialsException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.UNAUTHORIZED);
        }
    }
}
