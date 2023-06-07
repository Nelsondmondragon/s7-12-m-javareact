package com.nocountry.backend.service;

import java.util.List;

import com.nocountry.backend.model.dto.location.LocationDto;

public interface ILocationService {

    public void save(LocationDto locationDto);

    List<LocationDto> findAll();

    List<LocationDto> findAllBranch();

}
