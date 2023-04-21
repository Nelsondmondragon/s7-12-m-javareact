package com.nocountry.backend.util.georefapi;

import java.util.Map;

import com.nocountry.backend.dto.location.InformationLocationDto;

public interface IExecute {

    InformationLocationDto execute(Map<String, Object> toMap);
}
