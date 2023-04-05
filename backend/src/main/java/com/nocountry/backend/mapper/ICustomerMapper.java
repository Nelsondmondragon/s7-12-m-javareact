package com.nocountry.backend.mapper;

import java.util.List;

import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;

import com.nocountry.backend.dto.CustomerDetailsDto;
import com.nocountry.backend.dto.CustomerListDto;
import com.nocountry.backend.dto.RegisterRequestDto;
import com.nocountry.backend.model.Customer;

@Mapper(componentModel = "spring")
public interface ICustomerMapper {

    CustomerDetailsDto toCustomerDto(Customer customer);

    List<CustomerListDto> toCustomerListDtos(List<Customer> customers);

    void updateCustomer(CustomerDetailsDto customerDetailsDto, @MappingTarget Customer customer);

    @InheritInverseConfiguration
    @Mapping(target = "user", ignore = true)
    @Mapping(target = "fkUser", ignore = true)
    Customer toCustomer(RegisterRequestDto customerDto);
}
