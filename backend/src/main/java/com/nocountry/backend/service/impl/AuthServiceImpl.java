package com.nocountry.backend.service.impl;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.nocountry.backend.config.jwt.JwtProvider;
import com.nocountry.backend.dto.AuthRequestDto;
import com.nocountry.backend.dto.AuthResponseDto;
import com.nocountry.backend.dto.RegisterRequestDto;
import com.nocountry.backend.model.User;
import com.nocountry.backend.repository.IUserRepository;
import com.nocountry.backend.service.IAuthService;
import com.nocountry.backend.util.enums.Role;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements IAuthService {

    private final IUserRepository repository;

    private final PasswordEncoder passwordEncoder;

    private final JwtProvider jwtProvider;

    private final AuthenticationManager authenticationManager;

    @Override
    public AuthResponseDto register(RegisterRequestDto request) {

        var userOptional = repository.findByUsername(request.getUsername());
        if (userOptional.isPresent()) {
            throw new RuntimeException("Username already in use");
        }

        var user = User.builder()
                .username(request.getUsername())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(Role.USER.name())
                .build();

        repository.save(user);

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

        var user = repository.findByUsername(request.getUsername()).orElseThrow();
        var jwt = jwtProvider.generateToken(user);

        return AuthResponseDto.builder()
                .token(jwt)
                .build();
    }
}