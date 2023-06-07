package com.nocountry.backend.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.nocountry.backend.config.jwt.ExtractUsernameJwtUtil;
import com.nocountry.backend.model.dto.customer.CustomerDetailsDto;
import com.nocountry.backend.model.dto.customer.CustomerListDto;
import com.nocountry.backend.model.dto.customer.CustomerRegisterDto;
import com.nocountry.backend.model.dto.customer.CustomerUpdateDto;
import com.nocountry.backend.model.entity.Customer;
import com.nocountry.backend.model.mapper.ICustomerMapper;
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
        return customerRepository.findAll().stream().map(
                customer -> {
                    CustomerListDto customerListDto = this.customerMapper.toCustomerListDtos(customer);
                    customerListDto.setEmail(customer.getUser().getEmail());
                    return customerListDto;
                }

        ).collect(Collectors.toList());
    }

    @Override
    public CustomerDetailsDto save(CustomerRegisterDto customerRegisterDto) {
        return this.customerMapper.toCustomerDetailsDto(
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
        return this.customerRepository.findById(customerId).map(
                customer -> {
                    CustomerDetailsDto customerDetailsDto = this.customerMapper.toCustomerDetailsDto(customer);
                    customerDetailsDto.setEmail(customer.getUser().getEmail());
                    return customerDetailsDto;

                }).orElseThrow(() -> new RuntimeException("Customer not exists."));
    }

    @Override
    public CustomerDetailsDto updateCustomer(Long customerId, CustomerUpdateDto customerUpdateDto) {
        Customer customer = this.customerRepository.findById(customerId)
                .orElseThrow(() -> new RuntimeException("Problem in update data customer."));
        this.customerMapper.updateCustomer(customerUpdateDto, customer);
        this.customerRepository.save(customer);
        return this.findCustomerById(customerId);
    }

    @Override
    public void deleteCustomer(Long customerId) {
        customerRepository.deleteById(customerId);
        userService.deleteUser(customerId);
    }

}
