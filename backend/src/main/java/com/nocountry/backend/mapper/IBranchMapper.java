package com.nocountry.backend.mapper;

import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.NullValuePropertyMappingStrategy;

import com.nocountry.backend.dto.BranchDto;
import com.nocountry.backend.model.Branch;

@Mapper(componentModel = "spring", nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
public interface IBranchMapper {

    BranchDto toBranchDto(Branch branch);

    @InheritInverseConfiguration
    Branch toBranchDto(BranchDto branchDto);
}
