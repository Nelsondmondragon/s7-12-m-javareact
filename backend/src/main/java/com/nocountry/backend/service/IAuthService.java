package com.nocountry.backend.service;

import com.nocountry.backend.dto.*;

public interface IAuthService {

    public AuthResponseDto register(CustomerDetailsDto request);

    public AuthResponseDto login(AuthRequestDto request);
}
