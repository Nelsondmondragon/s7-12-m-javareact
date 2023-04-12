package com.nocountry.backend.mapper;

import java.util.List;

import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.NullValuePropertyMappingStrategy;

import com.nocountry.backend.dto.LocationDto;
import com.nocountry.backend.model.Location;

@Mapper(componentModel = "spring", nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
public interface ILocationMapper {

    LocationDto toLocationDto(Location location);

    List<LocationDto> toLocationDtos(List<Location> locations);

    @InheritInverseConfiguration
    @Mapping(target = "branches", ignore = true)
    Location toLocation(LocationDto locationDto);
}
