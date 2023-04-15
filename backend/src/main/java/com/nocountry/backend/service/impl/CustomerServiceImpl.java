package com.nocountry.backend.service.impl;

import java.util.List;
import java.util.Optional;

import com.nocountry.backend.dto.customer.CustomerUpdateDto;
import org.springframework.stereotype.Service;

import com.nocountry.backend.config.jwt.JwtProvider;
import com.nocountry.backend.dto.customer.CustomerDetailsDto;
import com.nocountry.backend.dto.customer.CustomerListDto;
import com.nocountry.backend.dto.customer.CustomerRegisterDto;
import com.nocountry.backend.mapper.ICustomerMapper;
import com.nocountry.backend.model.Customer;
import com.nocountry.backend.repository.ICustomerRepository;
import com.nocountry.backend.service.ICustomerService;
import com.nocountry.backend.service.IUserService;

import jakarta.persistence.EntityNotFoundException;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CustomerServiceImpl implements ICustomerService {

    private final ICustomerRepository customerRepository;

    private final ICustomerMapper customerMapper;

    private final IUserService userService;

    private final JwtProvider jwtProvider;

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
        String email = this.getEmail(request);

        var userRepository = userService.findUserByEmail(email);
        var customerDetailsDto = customerMapper.toCustomerDto(
                customerRepository.findByFkUser(userRepository.getId()));
        customerDetailsDto.setEmail(email);

        return customerDetailsDto;
    }


    public CustomerDetailsDto findCustomerByEmail(String email) {
        var userRepository = userService.findUserByEmail(email);
        var customerDetailsDto = customerMapper.toCustomerDto(
                customerRepository.findByFkUser(userRepository.getId()));
        customerDetailsDto.setEmail(email);
        return customerDetailsDto;
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
        String email = this.getEmail(request);

        Customer customer = this.customerRepository.findById(
                this.userService.findUserByEmail(email).getId()).orElseThrow(() -> new RuntimeException("Problem in update data customer."));
        this.customerMapper.updateCustomer(customerUpdateDto, customer);
        this.customerRepository.save(customer);
        CustomerDetailsDto customerDetailsDto = this.customerMapper.toCustomerDto(customer);
        customerDetailsDto.setEmail(email);
        return customerDetailsDto;
    }

    @Override
    public void deleteCustomer(HttpServletRequest request) {
        String email = this.getEmail(request);
        CustomerDetailsDto customerByEmail = this.findCustomerByEmail(email);
        customerRepository.deleteById(customerByEmail.getId());
        userService.deleteUser(customerByEmail.getId());
    }

    private String getEmail(HttpServletRequest request) {
        String authorization = request.getHeader("Authorization");
        return jwtProvider.extractUsername(authorization.substring(7));
    }
}
