package com.nocountry.backend.config;

import java.time.LocalDateTime;

import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.nocountry.backend.dto.BranchDto;
import com.nocountry.backend.model.Customer;
import com.nocountry.backend.model.User;
import com.nocountry.backend.repository.ICustomerRepository;
import com.nocountry.backend.repository.IUserRepository;
import com.nocountry.backend.service.BranchesService;
import com.nocountry.backend.service.LocationsService;
import com.nocountry.backend.util.enums.Role;
import com.nocountry.backend.util.georefapi.IExecuteApi;

import lombok.RequiredArgsConstructor;

@Component
@Order(value = Ordered.HIGHEST_PRECEDENCE)
@RequiredArgsConstructor
public class DefaultAdminRunner implements ApplicationRunner {

        private final IUserRepository userRepository;

        private final ICustomerRepository customerRepository;

        private final PasswordEncoder passwordEncoder;

        private final LocationsService locationsService;

        private final IExecuteApi executeApi;

        private final BranchesService branchesService;

        @Override
        public void run(ApplicationArguments args) throws Exception {
                createUsers();
                consumeApiGeorefArAPI();
                createBranches();
        }

        private void createBranches() {
                branchesService.save(BranchDto.builder()
                                .fkLocation("06014030")
                                .name("Wilderman, Runolfsdottir and Schamberger").build());
                branchesService.save(BranchDto.builder()
                                .fkLocation("06063030")
                                .name("Hegmann, Hickle and Smith").build());
                branchesService.save(BranchDto.builder()
                                .fkLocation("06063040")
                                .name("Funk-Larkin").build());
                branchesService.save(BranchDto.builder()
                                .fkLocation("06063050")
                                .name("Runolfsdottir LLC").build());
                branchesService.save(BranchDto.builder()
                                .fkLocation("06063060")
                                .name("Harber and Sons").build());
        }

        private void consumeApiGeorefArAPI() {
                this.locationsService.savaAll(executeApi.execute().getLocations());
                System.out.println("termino");

        }

        private void createUsers() {
                var admin = User.builder()
                                .email("admin@movear.com")
                                .password(passwordEncoder.encode("1234"))
                                .role(Role.ADMIN.name())
                                .build();

                var test = User.builder()
                                .email("test@test.com")
                                .password(passwordEncoder.encode("1234"))
                                .role(Role.USER.name())
                                .build();

                if (userRepository.findByEmail(admin.getUsername()).isEmpty()) {
                        admin = userRepository.save(admin);
                        var customer = Customer.builder()
                                        .firstName("Administrador")
                                        .fkUser(admin.getId())
                                        .build();
                        customerRepository.save(customer);
                }

                if (userRepository.findByEmail(test.getEmail()).isEmpty()) {
                        test = userRepository.save(test);
                        var customer = Customer.builder()
                                        .firstName("User")
                                        .lastName("Test")
                                        .phone("434534555")
                                        .birthdate(LocalDateTime.now())
                                        .address("direccion")
                                        .fkUser(test.getId())
                                        .build();
                        customerRepository.save(customer);
                }
        }
}