package com.nocountry.backend.service.impl;

import com.nocountry.backend.config.jwt.JwtProvider;
import com.nocountry.backend.dto.CustomerDetailsDto;
import com.nocountry.backend.dto.CustomerListDto;
import com.nocountry.backend.dto.UserDto;
import com.nocountry.backend.mapper.ICustomerMapper;
import com.nocountry.backend.repository.ICustomerRepository;
import com.nocountry.backend.service.ICustomerService;
import com.nocountry.backend.service.IUserService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


import com.nocountry.backend.model.Customer;

@Service
@RequiredArgsConstructor
public class CustomerServiceImpl implements ICustomerService {

    private final ICustomerRepository customerRepository;

    private final IUserService userService;

    private final ICustomerMapper customerMapper;

    private final JwtProvider jwtProvider;

    @Override
    public CustomerDetailsDto findByEmail(HttpServletRequest request) {
        String authorization = request.getHeader("Authorization");
        String email = this.jwtProvider.extractUsername(authorization.substring(7));
        UserDto userRepository = this.userService.findByEmail(email);
        CustomerDetailsDto customerDto = this.customerMapper.toCustomerDto(
                this.customerRepository.findByFkUser(userRepository.getId()));
        customerDto.setEmail(email);
        return customerDto;
    }


    // List<CustomerListDto>
    @Override
    public List<CustomerListDto> getAllCustomers() {
        return this.customerMapper.toCustomerListDtos(customerRepository.findAll());
    }

    // CustomerDetailsDto
    @Override
    public CustomerDetailsDto getCustomerById(Long customerId) {
        return this.customerMapper.toCustomerDto(
                customerRepository.findById(customerId).orElseThrow());
    }

    // CustomerDetailsDto
    @Override
    public CustomerDetailsDto updateCustomer(Long customerId, CustomerDetailsDto customerDetailsDto) {
        Optional<Customer> byId = this.customerRepository.findById(customerId);
        this.customerMapper.updateCustomerDetails(customerDetailsDto, byId.get());
        return customerDetailsDto;
    }

    @Override
    public void deleteCustomer(Long customerId) {
        customerRepository.deleteById(customerId);
    }
}
