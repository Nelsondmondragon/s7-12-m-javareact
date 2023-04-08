package com.nocountry.backend.dto;


import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


public class PaymentDto {
        public enum Currency{
                usd, eur;
        }

        private String description;
        private int amount;
        private Currency currency;


        public String getDescription() {
                return description;
        }

        public void setDescription(String description) {
                this.description = description;
        }

        public int getAmount() {
                return amount;
        }

        public void setAmount(int amount) {
                this.amount = amount;
        }

        public Currency getCurrency() {
                return currency;
        }

        public void setCurrency(Currency currency) {
                this.currency = currency;
        }


}