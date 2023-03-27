package com.nocountry.backend.service.impl;

import org.springframework.stereotype.Service;

import com.nocountry.backend.repository.ICarRepository;
import com.nocountry.backend.service.ICarService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CarServiceImpl implements ICarService {

    private final ICarRepository repository;
}
