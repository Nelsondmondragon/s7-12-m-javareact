package com.nocountry.backend.service;

import java.util.List;

import com.nocountry.backend.dto.customer.CustomerDetailsDto;
import com.nocountry.backend.dto.customer.CustomerListDto;
import com.nocountry.backend.dto.customer.CustomerRegisterDto;

import jakarta.servlet.http.HttpServletRequest;

public interface ICustomerService {

    public List<CustomerListDto> findAllCustomers();

    public CustomerDetailsDto save(CustomerRegisterDto customerRegisterDto);

    public CustomerDetailsDto findCustomerByEmail(HttpServletRequest request);

    public CustomerDetailsDto findCustomerById(Long customerId);

    public CustomerDetailsDto updateCustomer(Long customerId, CustomerDetailsDto customerDetailsDto);

    public void deleteCustomer(Long customerId);
}
