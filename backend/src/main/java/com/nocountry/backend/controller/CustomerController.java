package com.nocountry.backend.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nocountry.backend.dto.CustomerDetailsDto;
import com.nocountry.backend.dto.CustomerListDto;
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
@SecurityRequirement(name = "bearerAuth")
@Tag(name = "Customers", description = "MoveAr's customers")
public class CustomerController {

    private final ICustomerService customerService;

    @GetMapping("/all")
    @Operation(summary = "Customer details, send the JWT in the request header.")
    public ResponseEntity<List<CustomerListDto>> getAllCustomers() {
        var customers = customerService.findAllCustomers();
        if (customers.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(customers, HttpStatus.ACCEPTED);
        }
    }

    @GetMapping("/profile")
    @Operation(summary = "Get customer details by JWT, send token in the request header ")
    private ResponseEntity<CustomerDetailsDto> getCustomerByEmail(HttpServletRequest request) {
        return new ResponseEntity<>(customerService.findCustomerByEmail(request), HttpStatus.OK);
    }

    @GetMapping("/{customerId}")
    @Operation(summary = "Get customer details by customerId")
    public ResponseEntity<CustomerDetailsDto> getCustomerById(
            @Parameter(description = "customerId - Unique identifier of the customer") @PathVariable Long customerId) {
        return new ResponseEntity<>(customerService.findCustomerById(customerId), HttpStatus.OK);
    }

    @PutMapping("/{customerId}/update")
    @Operation(summary = "Update customer details by customerId")
    public ResponseEntity<CustomerDetailsDto> updateCustomer(@PathVariable Long customerId,
            @RequestBody CustomerDetailsDto customerDetailsDto) {
        return new ResponseEntity<>(customerService.updateCustomer(customerId, customerDetailsDto),
                HttpStatus.OK);
    }

    @DeleteMapping("/{customerId}/delete")
    @Operation(summary = "Delete customer by customerId")
    public ResponseEntity<CustomerDetailsDto> deleteCustomer(
            @Parameter(description = "customerId - Unique identifier of the customer") @PathVariable Long customerId) {
        customerService.deleteCustomer(customerId);
        return ResponseEntity.noContent().build();
    }
}