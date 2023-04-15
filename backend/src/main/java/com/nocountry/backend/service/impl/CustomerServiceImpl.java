package com.nocountry.backend.service.impl;

import java.util.List;

import com.nocountry.backend.dto.customer.CustomerUpdateDto;
import com.nocountry.backend.util.jwt.ExtractUsernameJwtUtil;
import org.springframework.stereotype.Service;

import com.nocountry.backend.dto.customer.CustomerDetailsDto;
import com.nocountry.backend.dto.customer.CustomerListDto;
import com.nocountry.backend.dto.customer.CustomerRegisterDto;
import com.nocountry.backend.mapper.ICustomerMapper;
import com.nocountry.backend.model.Customer;
import com.nocountry.backend.repository.ICustomerRepository;
import com.nocountry.backend.service.ICustomerService;
import com.nocountry.backend.service.IUserService;

import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CustomerServiceImpl implements ICustomerService {

    private final ICustomerRepository customerRepository;

    private final ICustomerMapper customerMapper;

    private final IUserService userService;

    private final ExtractUsernameJwtUtil extractUsernameJwtUtil;

    @Override
    public List<CustomerListDto> findAllCustomers() {
        var customers = customerRepository.findAll();
        var customersDto = customerMapper.toCustomerListDtos(customers);
        for (CustomerListDto customerDto : customersDto) {
            var customer = customerRepository.findById(customerDto.getId()).orElseThrow();
            customerDto.setEmail(customer.getUser().getEmail());
        }
        return customersDto;
    }

    @Override
    public CustomerDetailsDto save(CustomerRegisterDto customerRegisterDto) {
        return this.customerMapper.toCustomerDto(
                this.customerRepository.save(this.customerMapper.toCustomerRegister(customerRegisterDto)));
    }

    @Override
    public CustomerDetailsDto findCustomerByEmail(HttpServletRequest request) {
        Long userId = this.extractUsernameJwtUtil.getId(request);
        return this.findCustomerById(userId);
    }


    @Override
    public Boolean existsByEmail(String email) {
        return this.userService.emailExits(email);
    }

    @Override
    public CustomerDetailsDto findCustomerById(Long customerId) {
        var customer = customerRepository.findById(customerId).orElseThrow();
        var customerDetailsDto = customerMapper.toCustomerDto(customer);
        customerDetailsDto.setEmail(customer.getUser().getEmail());
        return customerDetailsDto;
    }

    @Override
    public CustomerDetailsDto updateCustomer(HttpServletRequest request, CustomerUpdateDto customerUpdateDto) {
        Long userId = this.extractUsernameJwtUtil.getId(request);
        Customer customer = this.customerRepository.findById(userId).orElseThrow(() -> new RuntimeException("Problem in update data customer."));
        this.customerMapper.updateCustomer(customerUpdateDto, customer);
        this.customerRepository.save(customer);
        CustomerDetailsDto customerDetailsDto = this.customerMapper.toCustomerDto(customer);
        customerDetailsDto.setEmail(customer.getUser().getEmail());
        return customerDetailsDto;
    }

    @Override
    public void deleteCustomer(HttpServletRequest request) {
        Long userId = this.extractUsernameJwtUtil.getId(request);
        customerRepository.deleteById(userId);
        userService.deleteUser(userId);
    }


}
