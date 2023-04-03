package com.nocountry.backend.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.nocountry.backend.model.Customer;
import com.nocountry.backend.repository.ICustomerRepository;
import com.nocountry.backend.service.ICustomerService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CustomerServiceImpl implements ICustomerService {

    private final ICustomerRepository customerRepository;

    // List<CustomerListDto>
    @Override
    public List<Customer> getAllCustomers() {
        return customerRepository.findAll();
    }

    // CustomerDetailsDto
    @Override
    public Customer getCustomerById(Long customerId) {
        return customerRepository.findById(customerId).orElseThrow();
    }

    // CustomerDetailsDto
    @Override
    public Customer updateCustomer(Long customerId, Customer customerDetailsDto) {
        var customer = customerRepository.findById(customerId).orElseThrow();

        if (customerDetailsDto.getFirstName() != null) {
            customer.setFirstName(customerDetailsDto.getFirstName());
        }

        if (customerDetailsDto.getLastName() != null) {
            customer.setLastName(customerDetailsDto.getLastName());
        }

        if (customerDetailsDto.getPhone() != null) {
            customer.setPhone(customerDetailsDto.getPhone());
        }

        if (customerDetailsDto.getEmail() != null) {
            customer.setEmail(customerDetailsDto.getEmail());
        }

        if (customerDetailsDto.getBirthdate() != null) {
            customer.setBirthdate(customerDetailsDto.getBirthdate());
        }

        return customerRepository.save(customer);
    }

    @Override
    public void deleteCustomer(Long customerId) {
        customerRepository.deleteById(customerId);
    }
}
