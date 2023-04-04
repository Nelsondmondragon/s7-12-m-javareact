package com.nocountry.backend.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.nocountry.backend.config.jwt.JwtProvider;
import com.nocountry.backend.dto.CustomerDetailsDto;
import com.nocountry.backend.dto.CustomerListDto;
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

    private final JwtProvider jwtProvider;

    @Override
    public List<CustomerListDto> findAllCustomers() {
        return customerMapper.toCustomerListDtos(customerRepository.findAll());
    }

    @Override
    public CustomerDetailsDto findByEmail(HttpServletRequest request) {
        String authorization = request.getHeader("Authorization");
        String email = jwtProvider.extractUsername(authorization.substring(7));

        var userRepository = userService.findByEmail(email);
        var customerDetailsDto = customerMapper.toCustomerDto(
                customerRepository.findByFkUser(userRepository.getId()));
        customerDetailsDto.setEmail(email);

        return customerDetailsDto;
    }

    @Override
    public CustomerDetailsDto findCustomerById(Long customerId) {
        return customerMapper.toCustomerDto(
                customerRepository.findById(customerId).orElseThrow());
    }

    @Override
    public CustomerDetailsDto updateCustomer(Long customerId, CustomerDetailsDto customerDetailsDto) {
        Optional<Customer> customer = customerRepository.findById(customerId);
        customerMapper.updateCustomer(customerDetailsDto, customer.get());
        return customerDetailsDto;
    }

    @Override
    public void deleteCustomer(Long customerId) {
        customerRepository.deleteById(customerId);
    }
}
