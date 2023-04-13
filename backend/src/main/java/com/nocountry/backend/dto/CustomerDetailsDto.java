package com.nocountry.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CustomerDetailsDto {

    private Long id;

    private String firstName;

    private String lastName;

    private String birthdate;

    private String email;

    private String address;

    private Long driverLicence;
}
