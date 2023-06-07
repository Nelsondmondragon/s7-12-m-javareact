package com.nocountry.backend.model.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.NullValuePropertyMappingStrategy;

import com.nocountry.backend.model.dto.user.UserDto;
import com.nocountry.backend.model.entity.User;

@Mapper(componentModel = "spring", nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
public interface IUserMapper {

    UserDto toUserDto(User user);

    // @InheritInverseConfiguration
    // User toUser(UserDto userDto);
}
