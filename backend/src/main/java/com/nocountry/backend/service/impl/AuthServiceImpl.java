package com.nocountry.backend.service.impl;

import com.nocountry.backend.dto.CustomerDto;
import com.nocountry.backend.mapper.ICustomerMapper;
import com.nocountry.backend.model.Customer;
import com.nocountry.backend.repository.ICustomerRepository;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.nocountry.backend.config.jwt.JwtProvider;
import com.nocountry.backend.dto.AuthRequestDto;
import com.nocountry.backend.dto.AuthResponseDto;
import com.nocountry.backend.model.User;
import com.nocountry.backend.repository.IUserRepository;
import com.nocountry.backend.service.IAuthService;
import com.nocountry.backend.util.enums.Role;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements IAuthService {

    private final IUserRepository userRepository;

    private final ICustomerRepository customerRepository;

    private final ICustomerMapper customerMapper;

    private final PasswordEncoder passwordEncoder;

    private final JwtProvider jwtProvider;

    private final AuthenticationManager authenticationManager;

    @Override
    public AuthResponseDto register(CustomerDto request) {


        var userOptional = userRepository.findByEmail(request.getEmail());
        if (userOptional.isPresent()) {
            throw new RuntimeException("Username already in use");
        }

        var user = User.builder()
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(Role.USER.name())
                .build();

        User userRepo = this.userRepository.save(user);

        System.out.println(request.getDni());
        System.out.println(request.getLicense() + " license request");


        Customer customer = this.customerMapper.toCustomer(request);

        System.out.println(customer.getLicense() + " license entity");
        customer.setFkUser(userRepo.getId());
        this.customerRepository.save(customer);

        var jwt = jwtProvider.generateToken(user);

        return AuthResponseDto.builder()
                .token(jwt)
                .build();
    }

    @Override
    public AuthResponseDto login(AuthRequestDto request) {

        try {
            authenticationManager
                    .authenticate(new UsernamePasswordAuthenticationToken(request.getUsername(),
                            request.getPassword()));
        } catch (AuthenticationException e) {
            throw new BadCredentialsException("Incorrect username or password", e);
        }

        var user = userRepository.findByEmail(request.getUsername()).orElseThrow();
        var jwt = jwtProvider.generateToken(user);

        return AuthResponseDto.builder()
                .token(jwt)
                .build();
    }
}