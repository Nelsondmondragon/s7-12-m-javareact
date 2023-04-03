package com.nocountry.backend.service;

import java.util.List;

import com.nocountry.backend.model.Customer;

public interface ICustomerService {

    // List<CustomerListDto>
    List<Customer> getAllCustomers();

    Customer getCustomerById(Long customerId);

    // CustomerDetailsDto
    Customer updateCustomer(Long customerId, Customer customerDetailsDto);

    void deleteCustomer(Long customerId);
}
