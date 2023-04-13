package com.nocountry.backend.dto;

import com.nocountry.backend.util.enums.Currency;

import lombok.*;


@Getter
@Setter
public class PaymentDto {

    private String description;

    private Integer amount;

    private Currency currency;
}
