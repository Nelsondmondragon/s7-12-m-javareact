package com.nocountry.backend.mapper;

import com.nocountry.backend.dto.LocationDto;
import com.nocountry.backend.model.Location;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface ILocationMapper {


    LocationDto toLocationDto(Location location);


    List<LocationDto> toLocationDtos(List<Location> locations);

    @InheritInverseConfiguration
    @Mapping(target = "branches", ignore = true)
    Location toLocation(LocationDto locationDto);

}
