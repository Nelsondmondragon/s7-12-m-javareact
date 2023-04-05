package com.nocountry.backend.service.impl;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.nocountry.backend.config.jwt.JwtProvider;
import com.nocountry.backend.dto.AuthRequestDto;
import com.nocountry.backend.dto.AuthResponseDto;
import com.nocountry.backend.dto.RegisterRequestDto;
import com.nocountry.backend.mapper.ICustomerMapper;
import com.nocountry.backend.model.User;
import com.nocountry.backend.repository.ICustomerRepository;
import com.nocountry.backend.repository.IUserRepository;
import com.nocountry.backend.service.IAuthService;
import com.nocountry.backend.service.IMailSenderService;
import com.nocountry.backend.util.enums.Role;

import jakarta.mail.MessagingException;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements IAuthService {

    private final IUserRepository userRepository;

    private final ICustomerRepository customerRepository;

    private final ICustomerMapper customerMapper;

    private final PasswordEncoder passwordEncoder;

    private final JwtProvider jwtProvider;

    private final AuthenticationManager authenticationManager;

    private final IMailSenderService mailSenderService;

    @Override
    public AuthResponseDto register(RegisterRequestDto request) {
        var userOptional = userRepository.findByEmail(request.getEmail());
        if (userOptional.isPresent()) {
            throw new RuntimeException("Email already in use");
        }

        var user = User.builder()
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(Role.USER.name())
                .build();

        var userRepo = userRepository.save(user);
        var customer = customerMapper.toCustomer(request);

        customer.setFkUser(userRepo.getId());
        customerRepository.save(customer);

        var jwt = jwtProvider.generateToken(user);

        String to = request.getEmail();
        String subject = "Bienvenido/a a MoveAR, " + request.getFirstName() + "!";
        String text = "<html><body>"
                + "<p>Estimado/a " + request.getFirstName() + ",</p>"
                + "<p>¡Bienvenido/a a MoveAR! Nos complace mucho que te hayas registrado en nuestra plataforma de alquiler de vehículos para mudanzas. Con MoveAR, mudarse nunca fue tan fácil.</p>"
                + "<p>Nuestro objetivo es ayudarte a que tu experiencia de mudanza sea lo más cómoda y sin estrés posible. Con nuestra amplia selección de vehículos disponibles para alquilar, podrás encontrar la opción perfecta para transportar tus pertenencias de manera segura y eficiente.</p>"
                + "<p>Además, nuestro equipo de expertos en mudanzas está siempre disponible para responder a cualquier pregunta o preocupación que puedas tener durante el proceso de alquiler. Nos enorgullece ofrecer un servicio al cliente excepcional y estamos comprometidos en hacer que tu experiencia con nosotros sea lo más satisfactoria posible.</p>"
                + "<p>Gracias por confiar en MoveAR para tus necesidades de mudanza. Esperamos que encuentres nuestro servicio fácil de usar y confiable. No dudes en contactarnos si necesitas ayuda en cualquier momento.</p>"
                + "<p>Atentamente,<br>El equipo de MoveAR</p>"
                + "</body></html>";

        try {
            mailSenderService.sendEmail(to, subject, text);
        } catch (MessagingException e) {
            e.printStackTrace();
        }

        return AuthResponseDto.builder()
                .token(jwt)
                .build();
    }

    @Override
    public AuthResponseDto login(AuthRequestDto request) {
        try {
            authenticationManager
                    .authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(),
                            request.getPassword()));
        } catch (AuthenticationException e) {
            throw new BadCredentialsException("Incorrect email or password", e);
        }

        var user = userRepository.findByEmail(request.getEmail()).orElseThrow();
        var jwt = jwtProvider.generateToken(user);

        return AuthResponseDto.builder()
                .token(jwt)
                .build();
    }
}