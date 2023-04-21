package com.nocountry.backend.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nocountry.backend.dto.location.LocationDto;
import com.nocountry.backend.service.ILocationService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/locations")
@Tag(name = "Locations", description = "List of localities in Argentina.")
@RequiredArgsConstructor
public class LocationController {

    private final ILocationService locationService;

    @GetMapping(value = "", produces = MediaType.APPLICATION_JSON_VALUE)
    @Operation(summary = "List of all towns in Argentina.")
    public ResponseEntity<List<LocationDto>> getAll() {
        return new ResponseEntity<>(locationService.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/branches", produces = MediaType.APPLICATION_JSON_VALUE)
    @Operation(summary = "List of all locations in Argentina with a MoveAr branch.")
    public ResponseEntity<List<LocationDto>> getAllBranch() {
        return new ResponseEntity<>(locationService.findAllBranch(), HttpStatus.OK);
    }

}
