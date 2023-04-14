package com.nocountry.backend.dto.card;

import com.fasterxml.jackson.annotation.JsonIgnore;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CardDetailDto {
    @Schema(example = "2424234423442344")
    private String numberCard;
    @Schema(example = "User attach")
    private String fullName;
    @Schema(example = "2023-01-15T12:00:00")
    private String date_expiration;
}
