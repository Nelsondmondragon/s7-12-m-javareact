package com.nocountry.backend.util.georefapi;

import com.nocountry.backend.dto.InformationLocationDto;
import feign.Headers;
import feign.QueryMap;
import feign.RequestLine;

import java.util.Map;

@Headers("Accept: application/json")
public interface GeorefArAPI {

    @RequestLine("GET /localidades-censales")
    InformationLocationDto locations(@QueryMap Map<String, Object> queryMap);

}
