package com.nocountry.backend.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CustomerDto {

    private String name;

    private String email;

    private String password;

    private String address;

    private String dni;

    private String license;
}
