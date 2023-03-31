package com.nocountry.backend.config;


import com.nocountry.backend.util.enums.GenericMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AppConfig {
    @Bean
    public GenericMapper genericMapper() {
        return GenericMapper.INSTANCE;
    }
}

