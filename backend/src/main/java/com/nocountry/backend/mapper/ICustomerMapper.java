package com.nocountry.backend.mapper;

import java.util.List;

import org.mapstruct.*;

import com.nocountry.backend.dto.CustomerDetailsDto;
import com.nocountry.backend.dto.CustomerListDto;
import com.nocountry.backend.dto.RegisterRequestDto;
import com.nocountry.backend.model.Customer;

@Mapper(componentModel = "spring", nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
public interface ICustomerMapper {

    @Mapping(target = "email", ignore = true)
    CustomerDetailsDto toCustomerDto(Customer customer);

    List<CustomerListDto> toCustomerListDtos(List<Customer> customers);

    void updateCustomer(CustomerDetailsDto customerDetailsDto, @MappingTarget Customer customer);

    @InheritInverseConfiguration
    @Mapping(target = "user", ignore = true)
    @Mapping(target = "id", ignore = true)
    @Mapping(target = "fkUser", ignore = true)
    Customer toCustomerRegister(RegisterRequestDto customerDto);
}
