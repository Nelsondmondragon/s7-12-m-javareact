package com.nocountry.backend.config.jwt;

import com.nocountry.backend.dto.user.UserDto;
import com.nocountry.backend.service.IUserService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class ExtractUsernameJwtUtil {

    private final JwtProvider jwtProvider;

    private final IUserService UserService;

    public Long getId(HttpServletRequest request) {
        String authorization = request.getHeader("Authorization");
        System.out.println("token " + authorization.substring(7));

        System.out.println("emial " + jwtProvider.extractUsername(authorization.substring(7)));

        UserDto userByEmail = this.UserService.findUserByEmail(jwtProvider.extractUsername(authorization.substring(7)));
        System.out.println(userByEmail.getId());
        return userByEmail.getId();
    }
}
