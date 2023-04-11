package com.nocountry.backend.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nocountry.backend.dto.LocationDto;
import com.nocountry.backend.service.LocationsService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/locations")
@Tag(name = "Localidades", description = "Localidades de Argentina.")
@RequiredArgsConstructor
@SecurityRequirement(name = "bearerAuth")
public class LocationController {

    private final LocationsService locationsService;

    @GetMapping(value = "", produces = MediaType.APPLICATION_JSON_VALUE)
    @Operation(summary = "Lista de todas las localidades de Argentina.")
    public ResponseEntity<List<LocationDto>> getAll() {
        return new ResponseEntity<>(locationsService.findAll(), HttpStatus.OK);
    }

    @Operation(summary = "Lita de todas las localidades de Argentina que contienen una sucursal de MoveAr.")
    @GetMapping(value = "/branches", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<LocationDto>> findAllLocationsContainingBranches() {
        return new ResponseEntity<>(this.locationsService.findAllLocationsContainingBranches(),
                HttpStatus.OK);
    }

}
