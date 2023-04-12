package com.nocountry.backend.service.impl;


import com.nocountry.backend.dto.BranchDto;
import com.nocountry.backend.mapper.IBranchMapper;
import com.nocountry.backend.repository.IBranchRepository;
import com.nocountry.backend.service.IBranchesService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class BranchServiceImplI implements IBranchesService {

    private final IBranchRepository branchRepository;

    private final IBranchMapper iBranchMapper;

    @Override
    public void save(BranchDto branchDto) {
        this.branchRepository.save(this.iBranchMapper.toBranchDto(branchDto));
    }
}
