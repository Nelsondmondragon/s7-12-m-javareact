package com.nocountry.backend.util.georefapi;

import java.util.Map;

import com.nocountry.backend.dto.InformationLocationDto;

import feign.Headers;
import feign.QueryMap;
import feign.RequestLine;

@Headers("Accept: application/json")
public interface GeorefArAPI {

    @RequestLine("GET /localidades-censales")
    InformationLocationDto locations(@QueryMap Map<String, Object> queryMap);
}
