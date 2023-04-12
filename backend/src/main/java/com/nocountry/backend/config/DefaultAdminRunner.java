package com.nocountry.backend.config;

import java.time.LocalDateTime;

import com.nocountry.backend.dto.BranchDto;
import com.nocountry.backend.service.IBranchesService;
import com.nocountry.backend.service.ILocationsService;
import com.nocountry.backend.util.georefapi.IExecute;
import com.nocountry.backend.util.georefapi.ISaveLocation;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.nocountry.backend.model.Customer;
import com.nocountry.backend.model.User;
import com.nocountry.backend.repository.ICustomerRepository;
import com.nocountry.backend.repository.IUserRepository;
import com.nocountry.backend.util.enums.Role;

import lombok.RequiredArgsConstructor;

@Component
@Order(value = Ordered.HIGHEST_PRECEDENCE)
@RequiredArgsConstructor
public class DefaultAdminRunner implements ApplicationRunner {

    private final IUserRepository userRepository;

    private final ICustomerRepository customerRepository;

    private final PasswordEncoder passwordEncoder;

    private final ISaveLocation saveLocation;
    private final IBranchesService IBranchesService;

//    private

    @Override
    public void run(ApplicationArguments args) throws Exception {
        createUsers();
        consumeApiGeorefArAPI();
        createBranches();
    }


    private void createBranches() {
        IBranchesService.save(BranchDto.builder()
                .fkLocation("02000010")
                .name("Wilderman, Runolfsdottir and Schamberger").build());
        IBranchesService.save(BranchDto.builder()
                .fkLocation("14014010")
                .name("Hegmann, Hickle and Smith").build());
        IBranchesService.save(BranchDto.builder()
                .fkLocation("06441030")
                .name("Funk-Larkin").build());
        IBranchesService.save(BranchDto.builder()
                .fkLocation("10077020")
                .name("Runolfsdottir LLC").build());
        IBranchesService.save(BranchDto.builder()
                .fkLocation("66028050")
                .name("Harber and Sons").build());
    }


    private static final String CABA = "localidades-censales?nombre=ciudad%20de%20buenos%20aires&campos=nombre";

    private void consumeApiGeorefArAPI() {
        this.saveLocation.save();
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