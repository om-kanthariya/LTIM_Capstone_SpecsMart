package com.examly.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.examly.springapp.model.Customer;
import com.examly.springapp.model.User;

@Repository
public interface CustomerRepo extends JpaRepository<Customer,Long>{
    
    public Customer findByUser(User user);
    public Boolean existsByUser(User user);

}
