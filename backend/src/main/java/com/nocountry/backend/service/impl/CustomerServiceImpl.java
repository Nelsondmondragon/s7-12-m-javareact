package com.nocountry.backend.service.impl;

import com.nocountry.backend.config.jwt.JwtProvider;
import com.nocountry.backend.dto.CustomerDto;
import com.nocountry.backend.dto.UserDto;
import com.nocountry.backend.mapper.ICustomerMapper;
import com.nocountry.backend.repository.ICustomerRepository;
import com.nocountry.backend.service.ICustomerService;
import com.nocountry.backend.service.IUserService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

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


}
