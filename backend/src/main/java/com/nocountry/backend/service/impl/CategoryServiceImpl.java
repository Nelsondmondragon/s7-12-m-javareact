package com.nocountry.backend.service.impl;

import org.springframework.stereotype.Service;

import com.nocountry.backend.repository.ICategoryRepository;
import com.nocountry.backend.service.ICategoryService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CategoryServiceImpl implements ICategoryService {

    private final ICategoryRepository repository;
}
