package com.examly.springapp.service;

import java.util.List;

import com.examly.springapp.model.Customer;

public interface CustomerService {
    public Customer registerCustomer(Customer customer);
    public Customer getCustomerById(long customerId);
    public Customer getCustomerByUserId(long userId);
    public List<Customer> getAllCustomers();

}
