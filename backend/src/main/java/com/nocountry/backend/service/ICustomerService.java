package com.nocountry.backend.service;

import java.util.List;

import com.nocountry.backend.dto.CustomerDetailsDto;
import com.nocountry.backend.dto.CustomerListDto;

import jakarta.servlet.http.HttpServletRequest;

public interface ICustomerService {

    public List<CustomerListDto> findAllCustomers();

    public CustomerDetailsDto findByEmail(HttpServletRequest request);

    public CustomerDetailsDto findCustomerById(Long customerId);

    public CustomerDetailsDto updateCustomer(Long customerId, CustomerDetailsDto customerDetailsDto);

    public void deleteCustomer(Long customerId);
}
