package com.nocountry.backend.config;

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

        @Override
        public void run(ApplicationArguments args) throws Exception {
                createUsers();
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
                                        .fullName("Administrador")
                                        .fkUser(admin.getId())
                                        .build();
                        customerRepository.save(customer);
                }
        }
}