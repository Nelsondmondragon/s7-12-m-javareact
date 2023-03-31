package com.nocountry.backend.util.enums;


import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper
public interface GenericMapper<S, T> {

    GenericMapper INSTANCE = Mappers.getMapper(GenericMapper.class);

    T mapToDto(S entity);

    S mapToEntity(T dto);
}

