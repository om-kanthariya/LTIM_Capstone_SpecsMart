package com.examly.springapp.service;

import com.examly.springapp.model.User;

public interface UserService {

    public User registerUser(User user);
    public User loginUser(User user);
    public User getUser(User user);
    
}
