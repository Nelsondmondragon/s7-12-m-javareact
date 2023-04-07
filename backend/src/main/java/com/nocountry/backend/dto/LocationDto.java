package com.nocountry.backend.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.google.gson.annotations.SerializedName;
import jakarta.websocket.server.ServerEndpoint;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LocationDto {

    private String id;
    @SerializedName("nombre")
    private String name;
}
