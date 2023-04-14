package com.nocountry.backend.service;

import com.nocountry.backend.dto.user.UserDto;

public interface IUserService {


    public UserDto findUserByEmail(String email);

    public void deleteUser(Long userId);
}
