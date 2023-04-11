package com.nocountry.backend.util.georefapi.impl;

import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Component;

import com.nocountry.backend.dto.InformationLocationDto;
import com.nocountry.backend.util.georefapi.APIFunctions;
import com.nocountry.backend.util.georefapi.GeorefArAPI;
import com.nocountry.backend.util.georefapi.IExecuteApi;

@Component
public class ExecuteApiImpl implements IExecuteApi {
    private static final String apiUrl = "https://apis.datos.gob.ar/georef/api";

    @Override
    public InformationLocationDto execute() {
        GeorefArAPI georefArAPI = APIFunctions.buildAPI(GeorefArAPI.class, apiUrl);
        return georefArAPI.locations(toMap());
    }

    private static Map<String, Object> toMap() {
        Map<String, Object> params = new HashMap<>();
        params.put("campos", "nombre");
        params.put("max", 3526);
        return params;
    }
}
