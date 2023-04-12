package com.nocountry.backend.dto;

import java.sql.Date;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequestDto {

    @Schema(example = "user@test.com")
    private String email;

    @Schema(example = "1234")
    private String password;

    @Schema(example = "Francisco")
    private String firstName;

    @Schema(example = "Pulido")
    private String lastName;

    @Schema(example = "1987-06-24")
    private Date birthdate;

    @Schema(example = "+54 11 1234 5678")
    private String phone;

    @Schema(example = "Calle sin nombre 123, Buenos Aires")
    private String address;

    @Schema(example = "1234567890")
    private Long driverLicence;
}