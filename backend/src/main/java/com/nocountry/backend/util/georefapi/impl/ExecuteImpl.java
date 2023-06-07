package com.nocountry.backend.util.georefapi.impl;

import java.util.Map;

import org.springframework.stereotype.Component;

import com.nocountry.backend.model.dto.location.InformationLocationDto;
import com.nocountry.backend.util.georefapi.APIFunctions;
import com.nocountry.backend.util.georefapi.GeorefArAPI;
import com.nocountry.backend.util.georefapi.IExecute;

@Component
public class ExecuteImpl implements IExecute {

    private static final String apiUrl = "https://apis.datos.gob.ar/georef/api";

    @Override
    public InformationLocationDto execute(Map<String, Object> toMap) {
        GeorefArAPI georefArAPI = APIFunctions.buildAPI(GeorefArAPI.class, apiUrl);
        return georefArAPI.locations(toMap);
    }
}
