package com.nocountry.backend.service;


import com.nocountry.backend.dto.LocationDto;

import java.util.List;

public interface LocationsService {

    void savaAll(List<LocationDto> locationDtos);

    List<LocationDto> findAllLocationsContainingBranches();

    List<LocationDto> findAll();

}
