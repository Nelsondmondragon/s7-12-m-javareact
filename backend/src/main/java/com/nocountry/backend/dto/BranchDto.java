package com.nocountry.backend.dto;

import com.google.gson.annotations.SerializedName;
import jakarta.persistence.Column;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class BranchDto {

    private Long id;

    private String name;

    @SerializedName("id_location")
    private String fkLocation;
}
