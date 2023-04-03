package com.nocountry.backend.controller;

import com.nocountry.backend.service.ICustomerService;
import jakarta.servlet.http.HttpServletRequest;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nocountry.backend.model.Customer;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("api/v1/customers")
@RequiredArgsConstructor
public class CustomerController {

    private final ICustomerService customerService;


    @GetMapping("/profile")
    private ResponseEntity<CustomerDto> findByEmail(HttpServletRequest request) {
        return new ResponseEntity<>(this.customerService.findByEmail(request), HttpStatus.OK);
    // List<CustomerListDto>

    @GetMapping("/all")
    public ResponseEntity<List<Customer>> getAllCustomers() {
        return new ResponseEntity<>(customerService.getAllCustomers(), HttpStatus.OK);
    }

    // CustomerDetailsDto
    @GetMapping("/{customerId}")
    public ResponseEntity<Customer> getCustomerById(@PathVariable Long customerId) {
        return new ResponseEntity<>(customerService.getCustomerById(customerId), HttpStatus.OK);
    }

    // CustomerDetailsDto
    @PatchMapping("/{customerId}/update")
    public ResponseEntity<Customer> updateCustomer(@PathVariable Long customerId,
            @RequestBody Customer customerDto) {
        return new ResponseEntity<>(customerService.updateCustomer(customerId, customerDto), HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/{customerId}/delete")
    public ResponseEntity<String> deleteCustomer(@PathVariable Long customerId) {
        customerService.deleteCustomer(customerId);
        return new ResponseEntity<>("Customer successfully deleted", HttpStatus.ACCEPTED);
    }
}
