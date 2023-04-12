package com.nocountry.backend.dto;

import java.util.List;

import com.google.gson.annotations.SerializedName;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class InformationLocationDto {

    @SerializedName("localidades_censales")
    private List<LocationDto> locations;

    public LocationDto locationDto() {
        return this.locations.get(0);
    }
}
