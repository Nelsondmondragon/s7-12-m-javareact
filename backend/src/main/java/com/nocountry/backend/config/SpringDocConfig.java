package com.nocountry.backend.config;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.servers.Server;
import io.swagger.v3.oas.annotations.servers.ServerVariable;
import org.springframework.context.annotation.Configuration;

import io.swagger.v3.oas.annotations.enums.SecuritySchemeType;
import io.swagger.v3.oas.annotations.security.SecurityScheme;

@Configuration
@OpenAPIDefinition(servers = {@Server(url = "{host}",
        variables = @ServerVariable(name = "host",
                defaultValue = "https://s7-12-m-javareact-production.up.railway.app",
                allowableValues = {"https://s7-12-m-javareact-production.up.railway.app", "http://localhost:8080"})

        ,
        description = "Host name by environment")})
@SecurityScheme(type = SecuritySchemeType.HTTP, name = "bearerAuth", scheme = "bearer", bearerFormat = "JWT")
public class SpringDocConfig {

}
