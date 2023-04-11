package com.nocountry.backend.dto;

import com.google.gson.annotations.SerializedName;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class BranchDto {

    private Long id;

    private String name;

    @SerializedName("id_location")
    private String fkLocation;
}
