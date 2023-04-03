package com.nocountry.backend.service;

import com.nocountry.backend.dto.AuthRequestDto;
import com.nocountry.backend.dto.AuthResponseDto;
import com.nocountry.backend.dto.CustomerDto;
import com.nocountry.backend.dto.RegisterRequestDto;

public interface IAuthService {

    public AuthResponseDto register(CustomerDto request);

    public AuthResponseDto login(AuthRequestDto request);
}
