package com.examly.springapp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.examly.springapp.model.Customer;
import com.examly.springapp.model.Orders;

@Repository
public interface OrderRepo extends JpaRepository<Orders,Long>{
    public List<Orders> findByCustomer(Customer customer);
}
