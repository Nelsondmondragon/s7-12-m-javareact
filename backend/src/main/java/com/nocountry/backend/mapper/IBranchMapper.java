package com.nocountry.backend.mapper;

import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;

import com.nocountry.backend.dto.BranchDto;
import com.nocountry.backend.model.Branch;

@Mapper(componentModel = "spring")
public interface IBranchMapper {

    BranchDto toBranchDto(Branch branch);

    @InheritInverseConfiguration
    Branch toBranchDto(BranchDto branchDto);
}
