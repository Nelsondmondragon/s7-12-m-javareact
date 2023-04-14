package com.nocountry.backend.service;


import com.nocountry.backend.dto.location.LocationDto;

import java.util.List;

public interface ILocationService {


    void save(LocationDto locationDto);


    List<LocationDto> findAll();

}
