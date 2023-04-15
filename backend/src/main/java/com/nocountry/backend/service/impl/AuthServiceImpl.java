package com.nocountry.backend.service.impl;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.nocountry.backend.Error.ErrorCode;
import com.nocountry.backend.Error.Exceptions.LoginException;
import com.nocountry.backend.Error.Exceptions.RegisterException;
import com.nocountry.backend.config.jwt.JwtProvider;
import com.nocountry.backend.dto.card.CardSaveDto;
import com.nocountry.backend.dto.customer.CustomerDetailsDto;
import com.nocountry.backend.dto.customer.CustomerRegisterDto;
import com.nocountry.backend.dto.customer.CustomerRequestDto;
import com.nocountry.backend.dto.token.TokenDto;
import com.nocountry.backend.model.User;
import com.nocountry.backend.repository.IUserRepository;
import com.nocountry.backend.service.IAuthService;
import com.nocountry.backend.service.ICardService;
import com.nocountry.backend.service.ICustomerService;
import com.nocountry.backend.service.IMailSenderService;
import com.nocountry.backend.util.enums.Role;

import jakarta.mail.MessagingException;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements IAuthService {

    private final IUserRepository userRepository;

    private final ICustomerService customerService;

    private final PasswordEncoder passwordEncoder;

    private final JwtProvider jwtProvider;

    private final AuthenticationManager authenticationManager;

    private final IMailSenderService mailSenderService;

    private final ICardService cardService;

    @Override
    public TokenDto register(CustomerRegisterDto request) {

        if (!mailSenderService.isMailValid(request.getEmail())) {
            throw new RegisterException(
                    String.format(
                            "the email address you provided is either not following the correct format or has been misspelled.Please check and re-enter the email address correctly.",
                            request.getEmail()));
        }

        var userOptional = userRepository.findByEmail(request.getEmail());
        if (userOptional.isPresent()) {
            throw new RegisterException(ErrorCode.EMAIL_EXISTS);
        }

        System.out.println("pppp");

        var user = User.builder()
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(Role.USER.name())
                .build();

        var userRepo = userRepository.save(user);

        request.setFkUser(userRepo.getId());
        this.customerService.save(request);

        if (request.getCard() != null) {
            CardSaveDto card1 = request.getCard();
            this.cardService.save(user.getId(), card1);
        }

        var jwt = jwtProvider.generateToken(user);

        String to = request.getEmail();
        String subject = "Bienvenido/a a MoveAR, " + request.getFullName() + "!";
        String text = "<p>Estimado/a Francisco,</p>"
                + "<p>¡Bienvenido/a a MoveAR! Nos complace mucho que te hayas registrado en nuestra plataforma de alquiler de vehículos para mudanzas. Con MoveAR, mudarse nunca fue tan fácil.</p>"
                + "<p>Nuestro objetivo es ayudarte a que tu experiencia de mudanza sea lo más cómoda posible. Con nuestra amplia selección de vehículos disponibles para alquilar, podrás encontrar la opción perfecta para transportar tus pertenencias de manera segura y eficiente.</p>"
                + "<p>Gracias por confiar en MoveAR para tus necesidades de mudanza. Esperamos que encuentres nuestro servicio fácil de usar y confiable. No dudes en contactarnos si necesitas ayuda en cualquier momento.</p>"
                + "<p>Atentamente,<br>El equipo de MoveAR</p>";

        try {
            mailSenderService.sendEmail(to, subject, text);
        } catch (MessagingException e) {
            e.printStackTrace();
        }

        return TokenDto.builder()
                .token(jwt)
                .build();
    }

    @Override
    public TokenDto login(CustomerRequestDto request) {

        userRepository.findByEmail(request.getEmail()).orElseThrow(() -> new LoginException(
                String.format("the email address you provided is either not registered in our system")));
        try {
            authenticationManager
                    .authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(),
                            request.getPassword()));
        } catch (AuthenticationException e) {
            throw new LoginException("Incorrect password");
        }

        var user = userRepository.findByEmail(request.getEmail()).orElseThrow();
        var jwt = jwtProvider.generateToken(user);

        return TokenDto.builder()
                .token(jwt)
                .build();
    }
}