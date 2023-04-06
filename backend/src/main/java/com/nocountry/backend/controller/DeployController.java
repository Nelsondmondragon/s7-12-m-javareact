package com.nocountry.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.security.SecurityRequirement;

@RestController
@RequestMapping("/api/v1/hello")
@SecurityRequirement(name = "bearerAuth")
public class DeployController {

    @GetMapping("/deploy")
    private String deploy() {
        return "Holi";
    }
}
