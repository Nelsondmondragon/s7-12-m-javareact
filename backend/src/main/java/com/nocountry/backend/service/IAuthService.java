package com.nocountry.backend.service;

import com.nocountry.backend.dto.customer.CustomerRegisterDto;
import com.nocountry.backend.dto.customer.CustomerRequestDto;
import com.nocountry.backend.dto.token.TokenDto;

public interface IAuthService {

    public TokenDto register(CustomerRegisterDto request);

    public TokenDto login(CustomerRequestDto request);
}
