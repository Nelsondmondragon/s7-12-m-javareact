package com.nocountry.backend.service;

import com.nocountry.backend.dto.UserDto;

public interface IUserService {

    public UserDto findByEmail(String email);

    void deleteById(Long id);
}
