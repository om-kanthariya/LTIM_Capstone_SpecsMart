package com.examly.springapp.model;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;

@Entity
public class Customer {
    
    @Id
    @GeneratedValue
    private long customerId;
    private String customerName;
    private String address;

    @OneToOne
    @JoinColumn(name = "user_id")
    private User user;


    


    public long getCustomerId() {
        return customerId;
    }

    public void setCustomerId(long customerId) {
        this.customerId = customerId;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    // public Customer(String customerId, String customerName, String address, User user) {
    //     this.customerId = customerId;
    //     this.customerName = customerName;
    //     this.address = address;
    //     this.user = user;
    // }

    // public Customer() {
    // }

    
    

}
