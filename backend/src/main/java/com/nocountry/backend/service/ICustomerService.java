package com.nocountry.backend.service;

import com.nocountry.backend.dto.CustomerDto;
import jakarta.servlet.http.HttpServletRequest;

public interface ICustomerService {


    CustomerDto findByEmail(HttpServletRequest request);


}
