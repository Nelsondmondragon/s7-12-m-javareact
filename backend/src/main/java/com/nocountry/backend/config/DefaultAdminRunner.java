package com.nocountry.backend.config;

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

                if (userRepository.findByEmail(admin.getUsername()).isEmpty()) {
                        admin = userRepository.save(admin);
                        var customer = Customer.builder()
                                        .firstName("Administrador")
                                        .fkUser(admin.getId())
                                        .build();
                        customerRepository.save(customer);
                }

                var maria = User.builder()
                                .email("maria@correo.com")
                                .password(passwordEncoder.encode("1234"))
                                .role(Role.USER.name())
                                .build();

                if (userRepository.findByEmail(maria.getEmail()).isEmpty()) {
                        maria = userRepository.save(maria);
                        var customer = Customer.builder()
                                        .firstName("Maria")
                                        .lastName("Contrera")
                                        .phone("+519111234567")
                                        .birthdate("2001-04-11")
                                        .address("Control")
                                        .fkUser(maria.getId())
                                        .build();
                        customerRepository.save(customer);
                }

                var pedro = User.builder()
                                .email("pedro@correo.com")
                                .password(passwordEncoder.encode("1234"))
                                .role(Role.USER.name())
                                .build();

                if (userRepository.findByEmail(pedro.getEmail()).isEmpty()) {
                        pedro = userRepository.save(pedro);
                        var customer = Customer.builder()
                                        .firstName("Pedro")
                                        .lastName("Perez")
                                        .phone("+519111234567")
                                        .birthdate("1990-04-11")
                                        .address("Otra direccion")
                                        .fkUser(pedro.getId())
                                        .build();
                        customerRepository.save(customer);
                }
        }
}