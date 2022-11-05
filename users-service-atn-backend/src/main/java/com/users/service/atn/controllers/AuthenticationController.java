package com.users.service.atn.controllers;

import com.users.service.atn.entities.JwtRequest;
import com.users.service.atn.entities.JwtResponse;
import com.users.service.atn.entities.User;
import com.users.service.atn.security.JwtUtils;
import com.users.service.atn.services.implementations.UserDetailsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthenticationController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserDetailsServiceImpl userDetailsServices;

    @Autowired
    private JwtUtils jwtUtils;

    @PostMapping("/login")
    public ResponseEntity<?> generateToken(@RequestBody JwtRequest jwtRequest) throws Exception {
        try{
            authenticate(jwtRequest.getUsername(), jwtRequest.getPassword());
        }catch (Exception exception) {
            exception.printStackTrace();
            throw new Exception("USUARIO NO ENCONTRADO");
        }

        User user = (User) this.userDetailsServices.loadUserByUsername(jwtRequest.getUsername());
        String token = this.jwtUtils.generateToken(user);
        return ResponseEntity.ok(new JwtResponse(token));
    }

    private void authenticate(String username, String password) throws Exception{
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
        }catch (DisabledException disabledException){
            throw new Exception("USUARIO DESABILITADO " + disabledException.getMessage());
        }catch (BadCredentialsException badCredentialsException){
            throw new Exception("CREDENCIALES INVALIDAS " + badCredentialsException.getMessage());
        }
    }

}
