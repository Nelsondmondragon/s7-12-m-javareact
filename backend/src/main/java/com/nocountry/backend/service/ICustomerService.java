package com.nocountry.backend.service;

import com.nocountry.backend.dto.CustomerDetailsDto;
import com.nocountry.backend.dto.CustomerListDto;
import com.nocountry.backend.model.Customer;
import jakarta.servlet.http.HttpServletRequest;

import java.util.List;

public interface ICustomerService {


    CustomerDetailsDto findByEmail(HttpServletRequest request);

    List<CustomerListDto> getAllCustomers();

    CustomerDetailsDto getCustomerById(Long customerId);

    CustomerDetailsDto updateCustomer(Long customerId, CustomerDetailsDto customerDetailsDto);

    void deleteCustomer(Long customerId);
}
