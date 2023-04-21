package com.nocountry.backend.service;

import com.nocountry.backend.dto.user.UserDto;
import com.nocountry.backend.model.Booking;

public interface IUserService {

    UserDto findUserByEmail(String email);

    Boolean emailExits(String email);

    void deleteUser(Long userId);
}
