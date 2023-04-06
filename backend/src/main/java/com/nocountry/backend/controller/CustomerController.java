package com.nocountry.backend.controller;

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
import com.nocountry.backend.service.ICustomerService;

import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("api/v1/customers")
@RequiredArgsConstructor
@SecurityRequirement(name = "bearerAuth")
public class CustomerController {

    private final ICustomerService customerService;

    // @GetMapping("/all")
    // public ResponseEntity<List<CustomerListDto>> getAllCustomers() {
    // return new ResponseEntity<>(customerService.findAllCustomers(),
    // HttpStatus.OK);
    // }

    @GetMapping("/profile")
    private ResponseEntity<CustomerDetailsDto> getCustomerByEmail(HttpServletRequest request) {
        return new ResponseEntity<>(customerService.findCustomerByEmail(request), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<CustomerDetailsDto> getCustomerById(@PathVariable Long id) {
        return new ResponseEntity<>(customerService.findCustomerById(id), HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<CustomerDetailsDto> updateCustomer(@PathVariable Long id,
            @RequestBody CustomerDetailsDto customerDetailsDto) {
        return new ResponseEntity<>(customerService.updateCustomer(id, customerDetailsDto),
                HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteCustomer(@PathVariable Long id) {
        customerService.deleteCustomer(id);
        return new ResponseEntity<>("Customer successfully deleted", HttpStatus.ACCEPTED);
    }
}