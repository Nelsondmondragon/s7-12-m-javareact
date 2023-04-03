package com.nocountry.backend.mapper;

import com.nocountry.backend.dto.CustomerDetailsDto;
import com.nocountry.backend.dto.CustomerDto;
import com.nocountry.backend.model.Customer;
import org.mapstruct.*;

@Mapper(componentModel = "spring")
public interface ICustomerMapper {

    CustomerDetailsDto toCustomerDto(Customer customer);


    @InheritInverseConfiguration
    @Mapping(target = "user", ignore = true)
    @Mapping(target = "fkUser", ignore = true)
    Customer toCustomer(CustomerDetailsDto customerDto);
}
