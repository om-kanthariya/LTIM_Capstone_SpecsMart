package com.examly.springapp.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.examly.springapp.exception.UserAlreadyExistException;
import com.examly.springapp.model.User;
import com.examly.springapp.repository.UserRepo;

@Service
public class UserServiceImpl implements UserService{


    private Logger logger = LoggerFactory.getLogger(SpecsServiceImpl.class);


    @Autowired
    private UserRepo userRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public User loginUser(User user) {
        String email = user.getEmail();
       User u = userRepo.findByEmail(email);
       if(user.getPassword().equals(u.getPassword())){
            logger.info("User has loged In.");
           return u;
       }else{
        logger.error("username and password not matched.");
        return null;
       }
    }

    @Override
    public User getUser(User user) {
        String email = user.getEmail();
       User u = userRepo.findByEmail(email);
           return u;
    }


    @Override
    public User registerUser(User user) throws UserAlreadyExistException{

        if(userRepo.existsByEmail(user.getEmail())){
            logger.error("User already exist with provided email.");
            throw new UserAlreadyExistException("User already exist with provided email !");
        }else{
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        User u=userRepo.save(user);
        logger.info("user registered successfully");
       return u;
        }
    }
    
}
