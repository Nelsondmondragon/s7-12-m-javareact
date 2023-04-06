package com.nocountry.backend.controller;

import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/hello")
@SecurityRequirement(name = "bearerAuth")
public class DeployController {

    @GetMapping("/deploy")
    private String deploy() {
        return "Holi";
    }
}
