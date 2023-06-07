package com.nocountry.backend.service;

import java.util.List;

import com.nocountry.backend.model.dto.customer.CustomerDetailsDto;
import com.nocountry.backend.model.dto.customer.CustomerListDto;
import com.nocountry.backend.model.dto.customer.CustomerRegisterDto;
import com.nocountry.backend.model.dto.customer.CustomerUpdateDto;

import jakarta.servlet.http.HttpServletRequest;

public interface ICustomerService {

    List<CustomerListDto> findAllCustomers();

    CustomerDetailsDto save(CustomerRegisterDto customerRegisterDto);


    CustomerDetailsDto findCustomerByEmail(HttpServletRequest request);

    Boolean existsByEmail(String email);

    CustomerDetailsDto findCustomerById(Long customerId);

    CustomerDetailsDto updateCustomer(Long customerId, CustomerUpdateDto customerUpdateDto);

    void deleteCustomer(Long customerId);
}
