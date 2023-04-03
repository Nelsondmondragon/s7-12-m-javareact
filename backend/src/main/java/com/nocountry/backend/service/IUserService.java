package com.nocountry.backend.service;

import com.nocountry.backend.dto.UserDto;

public interface IUserService {


    UserDto findByEmail(String email);
}
