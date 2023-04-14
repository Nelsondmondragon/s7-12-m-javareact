package com.nocountry.backend.service;

import com.nocountry.backend.dto.location.LocationDto;

import java.util.List;

public interface ILocationService {

    public void save(LocationDto locationDto);

    public List<LocationDto> findAll();
}
