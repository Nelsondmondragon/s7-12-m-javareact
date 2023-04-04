package com.nocountry.backend.mapper;

import com.nocountry.backend.dto.CustomerDetailsDto;
import com.nocountry.backend.dto.CustomerListDto;
import com.nocountry.backend.dto.RegisterRequestDto;
import com.nocountry.backend.model.Customer;
import org.mapstruct.*;

import java.util.List;

@Mapper(componentModel = "spring")
public interface ICustomerMapper {

    CustomerDetailsDto toCustomerDto(Customer customer);

    List<CustomerListDto> toCustomerListDtos(List<Customer> customers);

    void updateCustomerDetails(CustomerDetailsDto customerDetailsDto, @MappingTarget Customer customer);

    @InheritInverseConfiguration
    @Mapping(target = "user", ignore = true)
    @Mapping(target = "fkUser", ignore = true)
    Customer toCustomer(RegisterRequestDto customerDto);
}

