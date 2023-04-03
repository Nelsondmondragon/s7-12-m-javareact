package com.nocountry.backend.dto;

import java.sql.Date;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonView;
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

    //    @JsonIgnoreProperties("password")
    @JsonProperty(value = "password", access = JsonProperty.Access.WRITE_ONLY)
    private String password;
    private String email;
    private Date birthdate;
    private String address;
    private String nationalIdImgUrl;
    private String driverLicenceImgUrl;
}
