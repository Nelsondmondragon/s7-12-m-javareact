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
        return customerMapper.toCustomerListDtos(customerRepository.findAll());
    }

    @Override
    public CustomerDetailsDto findCustomerByEmail(HttpServletRequest request) {
        String authorization = request.getHeader("Authorization");
        String email = jwtProvider.extractUsername(authorization.substring(7));

        var userRepository = userService.findUserByEmail(email);
        var customerDetailsDto = customerMapper.toCustomerDto(
                customerRepository.findByFkUser(userRepository.getId()));
        customerDetailsDto.setEmail(email);

        return customerDetailsDto;
    }

    @Override
    public CustomerDetailsDto findCustomerById(Long customerId) {
        var customer = customerRepository.findById(customerId).orElseThrow();
        var customerDetailsDto = customerMapper.toCustomerDto(customer);
        customerDetailsDto.setEmail(customer.getUser().getEmail());
        return customerDetailsDto;
    }

    @Override
    public CustomerDetailsDto updateCustomer(Long customerId, CustomerDetailsDto customerDetailsDto) {
        Optional<Customer> customerEntity = customerRepository.findById(customerId);
        if (customerEntity.isPresent()) {
            Customer customer = customerEntity.get();
            customerMapper.updateCustomer(customerDetailsDto, customer);
            Customer updatedCustomer = customerRepository.save(customer);
            CustomerDetailsDto updatedCustomerDto = customerMapper.toCustomerDto(updatedCustomer);
            updatedCustomerDto.setEmail(updatedCustomer.getUser().getEmail());
            return updatedCustomerDto;
        } else {
            throw new EntityNotFoundException("customer not found with id: " + customerId);
        }
    }

    @Override
    public void deleteCustomer(Long id) {
        Long userId = userService.findUserByEmail(findCustomerById(id).getEmail()).getId();
        customerRepository.deleteById(id);
        userService.deleteUser(userId);
    }
}
