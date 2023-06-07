package com.nocountry.backend.model.dto.payment;

import com.nocountry.backend.util.enums.Currency;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PaymentDto {

    private String description;

    private Integer amount;

    private Currency currency;
}
