package com.nocountry.backend.service;

import com.nocountry.backend.dto.customer.CustomerRequestDto;
import com.nocountry.backend.dto.token.TokenDto;
import com.nocountry.backend.dto.customer.CustomerRegisterDto;

public interface IAuthService {

    public TokenDto register(CustomerRegisterDto request);

    public TokenDto login(CustomerRequestDto request);
}
