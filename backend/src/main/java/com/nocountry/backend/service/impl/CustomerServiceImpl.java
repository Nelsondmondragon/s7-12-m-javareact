package com.nocountry.backend.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.nocountry.backend.Error.Exceptions.GenericNotFoundException;
import com.nocountry.backend.model.Category;
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
        List<Customer> customerEntities = customerRepository.findAll();
        if (customerEntities.isEmpty()) {
            return new ArrayList<>();
        } else {
            return customerMapper.toCustomerListDtos(customerEntities);
        }
    }

    @Override
    public CustomerDetailsDto findCustomerByEmail(HttpServletRequest request) {
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
        var customer = customerRepository.findById(customerId)
                .orElseThrow(() -> new GenericNotFoundException(String.format("The customer with the provided ID (%s) was not found",customerId)));
        var customerDetailsDto = customerMapper.toCustomerDto(customer);
        customerDetailsDto.setEmail(customer.getUser().getEmail());
        return customerDetailsDto;
    }

    @Override
    public CustomerDetailsDto updateCustomer(Long customerId, CustomerDetailsDto customerDetailsDto) {
        Customer customer = customerRepository.findById(customerId)
                .orElseThrow(() -> new GenericNotFoundException(String.format("The customer with the provided ID (%s) was not found", customerId)));
        customerMapper.updateCustomer(customerDetailsDto,customer);
        Customer updatedCustomer= customerRepository.save(customer);
        return customerMapper.toCustomerDto(updatedCustomer);

    }

    @Override
    public void deleteCustomer(Long id) {
        Long userId = this.userService.findByEmail(this.findCustomerById(id).getEmail()).getId();
        this.customerRepository.deleteById(id);
        this.userService.deleteById(userId);
    }
}
