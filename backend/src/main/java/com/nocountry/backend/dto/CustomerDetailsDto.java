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
public class CustomerDetailsDto {

    private Long id;

    private String firstName;

    private String lastName;

    private String phone;

    private String email;

    private Date birthdate;

    private String address;

    private String nationalIdImgUrl;

    private String driverLicenceImgUrl;
}
