package com.examly.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.examly.springapp.model.User;

@Repository
public interface UserRepo extends JpaRepository<User,Long>{
    
    public User findByEmail(String email);
    public boolean existsByEmail(String email);
}
