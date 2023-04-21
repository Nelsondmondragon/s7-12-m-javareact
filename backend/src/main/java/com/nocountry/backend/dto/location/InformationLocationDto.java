package com.nocountry.backend.dto.location;

import java.util.List;

import com.google.gson.annotations.SerializedName;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class InformationLocationDto {

    @SerializedName("localidades_censales")
    private List<LocationDto> locations;

    public LocationDto locationDto() {
        return this.locations.get(0);
    }
}
