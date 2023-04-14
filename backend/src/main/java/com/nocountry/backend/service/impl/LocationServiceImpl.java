package com.nocountry.backend.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.nocountry.backend.dto.location.LocationDto;
import com.nocountry.backend.mapper.ILocationMapper;
import com.nocountry.backend.repository.ILocationRepository;
import com.nocountry.backend.service.ILocationService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class LocationServiceImpl implements ILocationService {

    private final ILocationRepository locationsRepository;

    private final ILocationMapper locationMapper;

    @Override
    public void save(LocationDto locationDto) {
        this.locationsRepository.save(this.locationMapper.toLocation(locationDto));
    }

    @Override
    public List<LocationDto> findAll() {
        return this.locationMapper.toLocationDtos(this.locationsRepository.findAll());
    }
}
