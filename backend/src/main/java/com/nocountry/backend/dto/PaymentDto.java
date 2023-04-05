package com.nocountry.backend.dto;


import lombok.*;

@Getter
@Setter
public class PaymentDto {

        private String cardNumber;
        private int expMonth;
        private int expYear;
        private int cvc;
        private int amount;
        private String currency;
        private String bookingId;

}
