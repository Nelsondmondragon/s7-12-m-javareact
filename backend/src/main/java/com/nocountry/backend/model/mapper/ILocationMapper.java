package com.nocountry.backend.model.mapper;

import java.util.List;

import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.NullValuePropertyMappingStrategy;

import com.nocountry.backend.model.dto.location.LocationDto;
import com.nocountry.backend.model.entity.Location;

@Mapper(componentModel = "spring", nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
public interface ILocationMapper {

    LocationDto toLocationDto(Location location);

    List<LocationDto> toLocationDtos(List<Location> locations);

    @InheritInverseConfiguration
    @Mapping(target = "cars", ignore = true)
    Location toLocation(LocationDto locationDto);
}
