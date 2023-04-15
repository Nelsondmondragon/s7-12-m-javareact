package com.nocountry.backend.controller;

import java.util.List;

import com.nocountry.backend.dto.customer.CustomerUpdateDto;
import com.nocountry.backend.dto.email.EmailDto;
import com.nocountry.backend.model.Customer;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.nocountry.backend.dto.customer.CustomerDetailsDto;
import com.nocountry.backend.dto.customer.CustomerListDto;
import com.nocountry.backend.service.ICustomerService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("api/v1/customers")
@RequiredArgsConstructor
@Tag(name = "Customers", description = "MoveAr's customers")
public class CustomerController {

    private final ICustomerService customerService;

    @GetMapping("/all")
    @Operation(summary = "List of all clients.")
    public ResponseEntity<List<CustomerListDto>> getAllCustomers() {
        var customers = customerService.findAllCustomers();
        if (customers.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(customers, HttpStatus.ACCEPTED);
        }
    }

    @GetMapping("/profile")
    @SecurityRequirement(name = "bearerAuth")
    @Operation(summary = "Get customer details by JWT, send token in the request header.")
    private ResponseEntity<CustomerDetailsDto> getCustomerByEmail(HttpServletRequest request) {
        return new ResponseEntity<>(customerService.findCustomerByEmail(request), HttpStatus.OK);
    }

    @PostMapping(value = "/email", produces = MediaType.APPLICATION_JSON_VALUE)
    @Operation(summary = "Validate if the customer email already exists.")
    private ResponseEntity<Boolean> emailExits(@RequestBody EmailDto email) {
        return new ResponseEntity<>(customerService.existsByEmail(email.getEmail()), HttpStatus.OK);
    }


    @PutMapping("/{customerId}")
    @SecurityRequirement(name = "bearerAuth")
    @Operation(summary = "Update customer by id.")
    public ResponseEntity<CustomerDetailsDto> updateCustomer(@PathVariable Long customerId, @RequestBody CustomerUpdateDto customerUpdateDto) {

        System.out.println("eeee");

        return new ResponseEntity<>(customerService.updateCustomer(customerId, customerUpdateDto),
                HttpStatus.OK);
    }

    @DeleteMapping("/{customerId}")
    @SecurityRequirement(name = "bearerAuth")
    @Operation(summary = "Delete customer with JWT, send token in the request header.")
    public ResponseEntity<CustomerDetailsDto> deleteCustomer(@PathVariable  Long customerId) {
        customerService.deleteCustomer(customerId);
        return ResponseEntity.noContent().build();
    }
}