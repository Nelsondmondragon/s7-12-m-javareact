package com.nocountry.backend.util.georefapi;

import java.util.Map;

import com.nocountry.backend.model.dto.location.InformationLocationDto;

public interface IExecute {

    InformationLocationDto execute(Map<String, Object> toMap);
}
