package com.nocountry.backend.mapper;

import com.nocountry.backend.dto.BranchDto;
import com.nocountry.backend.model.Branch;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface IBranchMapper {

    BranchDto toBranchDto(Branch branch);


    @InheritInverseConfiguration
    Branch toBranchDto(BranchDto branchDto);
}
