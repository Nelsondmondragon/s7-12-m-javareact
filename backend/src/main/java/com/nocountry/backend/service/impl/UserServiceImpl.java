package com.nocountry.backend.service.impl;

import com.nocountry.backend.dto.UserDto;
import com.nocountry.backend.mapper.IUserMapper;
import com.nocountry.backend.repository.IUserRepository;
import com.nocountry.backend.service.IUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements IUserService {


    private final IUserRepository userRepository;

    private final IUserMapper userMapper;

    @Override
    public UserDto findByEmail(String email) {
        return userRepository.findByEmail(email).
                map(userMapper::toUserDto)
                .orElseThrow(() -> new RuntimeException("Email user not exists."));
    }
}