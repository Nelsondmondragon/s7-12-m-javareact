package com.nocountry.backend.dto.location;

import java.util.List;

import com.google.gson.annotations.SerializedName;

import com.nocountry.backend.dto.location.LocationDto;
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
