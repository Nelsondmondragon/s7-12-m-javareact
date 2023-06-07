package com.nocountry.backend.model.dto.customer;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CustomerRequestDto {

    @Schema(example = "admin@movear.com")
    private String email;

    @Schema(example = "1234")
    private String password;
}