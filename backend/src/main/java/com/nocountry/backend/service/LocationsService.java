package com.nocountry.backend.service;

import java.util.List;

import com.nocountry.backend.dto.LocationDto;

public interface LocationsService {

    public void savaAll(List<LocationDto> locationDtos);

    public List<LocationDto> findAllLocationsContainingBranches();

    public List<LocationDto> findAll();
}
