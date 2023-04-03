package com.nocountry.backend.service.impl;

import com.nocountry.backend.config.jwt.JwtProvider;
import com.nocountry.backend.repository.ICustomerRepository;
import com.nocountry.backend.service.ICustomerService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;


import com.nocountry.backend.model.Customer;

@Service
@RequiredArgsConstructor
public class CustomerServiceImpl implements ICustomerService {

    private final ICustomerRepository customerRepository;

    private final IUserService userService;

    private final ICustomerMapper customerMapper;

    private final JwtProvider jwtProvider;

    @Override
    public CustomerDto findByEmail(HttpServletRequest request) {
        String authorization = request.getHeader("Authorization");
        String email = this.jwtProvider.extractUsername(authorization.substring(7));
        UserDto userRepository = this.userService.findByEmail(email);
        CustomerDto customerDto = this.customerMapper.toCustomerDto(
                this.customerRepository.findByFkUser(userRepository.getId()));
        customerDto.setEmail(email);
        return customerDto;
    }


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
