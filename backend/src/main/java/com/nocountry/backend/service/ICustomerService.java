package com.nocountry.backend.service;

import com.nocountry.backend.dto.CustomerDto;
import com.nocountry.backend.model.Customer;
import jakarta.servlet.http.HttpServletRequest;

import java.util.List;

public interface ICustomerService {


    CustomerDto findByEmail(HttpServletRequest request);

    List<Customer> getAllCustomers();

    Customer getCustomerById(Long customerId);

    // CustomerDetailsDto
    Customer updateCustomer(Long customerId, Customer customerDetailsDto);

    void deleteCustomer(Long customerId);
}
