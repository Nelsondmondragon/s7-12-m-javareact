package com.nocountry.backend.dto;

import java.sql.Date;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequestDto {

    private String email;

    private String password;

    private String firstName;

    private String lastName;

    private Date birthdate;

    private String phone;

    private String address;

    private Long driverLicence;
}