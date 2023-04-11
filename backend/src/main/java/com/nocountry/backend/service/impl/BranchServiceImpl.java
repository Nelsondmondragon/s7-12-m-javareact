package com.nocountry.backend.service.impl;

import org.springframework.stereotype.Service;

import com.nocountry.backend.dto.BranchDto;
import com.nocountry.backend.mapper.IBranchMapper;
import com.nocountry.backend.repository.IBranchRepository;
import com.nocountry.backend.service.BranchesService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class BranchServiceImpl implements BranchesService {

    private final IBranchRepository branchRepository;

    private final IBranchMapper iBranchMapper;

    @Override
    public void save(BranchDto branchDto) {
        this.branchRepository.save(this.iBranchMapper.toBranchDto(branchDto));
    }
}
