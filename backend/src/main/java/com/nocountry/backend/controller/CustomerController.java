package com.nocountry.backend.controller;

import com.nocountry.backend.dto.CustomerDto;
import com.nocountry.backend.service.ICustomerService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/customers")
@RequiredArgsConstructor
public class CustomerController {

    private final ICustomerService customerService;


    @GetMapping("/profile")
    private ResponseEntity<CustomerDto> findByEmail(HttpServletRequest request) {
        return new ResponseEntity<>(this.customerService.findByEmail(request), HttpStatus.OK);
    }
}
