package com.examly.springapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.examly.springapp.config.JwtUtils;
import com.examly.springapp.config.MyUserDetailsService;
import com.examly.springapp.model.User;
import com.examly.springapp.response.JwtResponse;
import com.examly.springapp.service.UserService;

@RestController
// @CrossOrigin(origins="https://8081-bcbafcbddfdbcfbcacfdfdbaffcfadaff.premiumproject.examly.io")
public class AuthController {
    
    @Autowired
    UserService userService;

     @Autowired
    private MyUserDetailsService myUserDetailsService;

     @Autowired
    private JwtUtils jwtUtils;

    @Autowired
    private AuthenticationManager authenticationManager;


    @PostMapping("/api/register")
    
    public ResponseEntity<User> userRegister(@RequestBody User register){
        User u=userService.registerUser(register);
       
        if(u!=null){
            return new ResponseEntity<>(u,HttpStatus.CREATED);
        }
        else{
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/api/login")
    public ResponseEntity<?> generateToken(@RequestBody User request) throws Exception{

    this.doAuthenticate(request.getEmail(), request.getPassword());


        UserDetails userDetails = myUserDetailsService.loadUserByUsername(request.getEmail());
        String token = this.jwtUtils.generateToken(userDetails);
        User user = userService.getUser(request);
        
        JwtResponse rs = new JwtResponse();
        rs.setToken(token);
        rs.setEmail(request.getEmail());
        rs.setName(user.getName());
        rs.setRole(user.getRole());
        rs.setUserId(user.getUserId());

        // JwtResponse response = JwtResponse.builder()
        //         .jwtToken(token)
        //         .username(userDetails.getUsername()).build();
        
        return new ResponseEntity<>(rs, HttpStatus.OK);
}

private void doAuthenticate(String email, String password) {

    UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(email, password);
    try {
        authenticationManager.authenticate(authentication);


    } catch (BadCredentialsException e) {
        throw new BadCredentialsException(" Invalid Username or Password  !!");
    }

}
    

}
