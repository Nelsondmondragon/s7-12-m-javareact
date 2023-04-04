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

import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("api/v1/customers")
@RequiredArgsConstructor
public class CustomerController {

    private final ICustomerService customerService;

    @GetMapping("/all")
    public ResponseEntity<List<CustomerListDto>> getAllCustomers() {
        return new ResponseEntity<>(customerService.findAllCustomers(), HttpStatus.OK);
    }

    @GetMapping("/profile")
    private ResponseEntity<CustomerDetailsDto> getCustomerByEmail(HttpServletRequest request) {
        return new ResponseEntity<>(customerService.findCustomerByEmail(request), HttpStatus.OK);
    }

    @GetMapping("/{customerId}")
    public ResponseEntity<CustomerDetailsDto> getCustomerById(@PathVariable Long customerId) {
        return new ResponseEntity<>(customerService.findCustomerById(customerId), HttpStatus.OK);
    }

    @PutMapping("/{customerId}/update")
    public ResponseEntity<CustomerDetailsDto> updateCustomer(@PathVariable Long customerId,
            @RequestBody CustomerDetailsDto customerDetailsDto) {
        return new ResponseEntity<>(customerService.updateCustomer(customerId, customerDetailsDto),
                HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/{customerId}/delete")
    public ResponseEntity<String> deleteCustomer(@PathVariable Long customerId) {
        customerService.deleteCustomer(customerId);
        return new ResponseEntity<>("Customer successfully deleted", HttpStatus.ACCEPTED);
    }
}