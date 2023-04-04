package com.nocountry.backend.mapper;

import org.mapstruct.Mapper;

import com.nocountry.backend.dto.UserDto;
import com.nocountry.backend.model.User;

@Mapper(componentModel = "spring")
public interface IUserMapper {

    UserDto toUserDto(User user);

    // @InheritInverseConfiguration
    // User toUser(UserDto userDto);
}
