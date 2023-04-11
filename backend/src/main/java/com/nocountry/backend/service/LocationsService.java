package com.nocountry.backend.service;

import java.util.List;

import com.nocountry.backend.dto.LocationDto;

public interface LocationsService {

    public List<LocationDto> findAllLocations();

    public List<LocationDto> findAllLocationsContainingBranches();

    public void saveAll(List<LocationDto> locationDtos);
}
