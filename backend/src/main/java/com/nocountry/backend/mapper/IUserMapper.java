package com.nocountry.backend.mapper;

import com.nocountry.backend.dto.UserDto;
import com.nocountry.backend.model.User;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface IUserMapper {

    UserDto toUserDto(User user);


//    @InheritInverseConfiguration
//    User toUser(UserDto userDto);
}
