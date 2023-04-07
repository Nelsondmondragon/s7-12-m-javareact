package com.nocountry.backend.dto;

import com.google.gson.annotations.SerializedName;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class InformationLocationDto {

    @SerializedName("localidades_censales")
    private List<LocationDto> locations;

}
