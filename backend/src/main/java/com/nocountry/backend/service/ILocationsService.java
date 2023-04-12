package com.nocountry.backend.service;


import com.nocountry.backend.dto.LocationDto;

import java.util.List;

public interface ILocationsService {

    void savaAll(List<LocationDto> locationDtos);

    void save(LocationDto locationDto);

    List<LocationDto> findAllLocationsContainingBranches();

    List<LocationDto> findAll();

}
