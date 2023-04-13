package com.nocountry.backend.dto;

import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class CardDto {

    private String numberCard;

    private String fullName;

    private String date_expiration;

    private String cvv;
}
