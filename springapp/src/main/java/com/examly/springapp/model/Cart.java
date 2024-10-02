package com.examly.springapp.model;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToOne;

@Entity
public class Cart {
    @Id
    @GeneratedValue
    private long cartId;
    @ManyToMany
    @JoinTable(name = "cart_specs" ,joinColumns = @JoinColumn(name="cart_id"),inverseJoinColumns = @JoinColumn(name="specs_id"))
    private List<Specs> specs;

    @OneToOne
    @JoinColumn(name = "customer_id")
    private Customer customer;
    private double totalAmount;


    public long getCartId(){
        return cartId;
    }
    public void setCartId(long cartId) {
        this.cartId = cartId;
    }
    public List<Specs> getSpecs() {
        return specs;
    }
    public void setSpecs(List<Specs> specs) {
        this.specs = specs;
    }
    public Customer getCustomer() {
        return customer;
    }
    public void setCustomer(Customer customer) {
        this.customer = customer;
    }
    public double getTotalAmount() {
        return totalAmount;
    }
    public void setTotalAmount(double totalAmount) {
        this.totalAmount = totalAmount;
    }


    

    // public Cart() {
    // }

    // public Cart(long cartId, List<Specs> specs, Customer customer, double totalAmount) {
    //     this.cartId = cartId;
    //     this.specs = specs;
    //     this.customer = customer;
    //     this.totalAmount = totalAmount;
    // }

    
}
