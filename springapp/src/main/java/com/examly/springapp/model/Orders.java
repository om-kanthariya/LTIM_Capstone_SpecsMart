package com.examly.springapp.model;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;

@Entity
public class Orders {
    @Id
    @GeneratedValue
    private long orderId;
    private double orderPrice;
    private int quantity;
    @ManyToMany
    @JoinTable(name = "order_specs" ,joinColumns = @JoinColumn(name="order_id"),inverseJoinColumns = @JoinColumn(name="specs_id"))
    private List<Specs> specs;
    @ManyToOne
    // add cascade 
    @JoinColumn(name = "customer_id")
    Customer customer;

    
    public long getOrderId() {
        return orderId;
    }
    public void setOrderId(long orderId) {
        this.orderId = orderId;
    }
    public double getOrderPrice() {
        return orderPrice;
    }
    public void setOrderPrice(double orderPrice) {
        this.orderPrice = orderPrice;
    }
    public int getQuantity() {
        return quantity;
    }
    public void setQuantity(int quantity) {
        this.quantity = quantity;
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

    

    // public Orders() {
    // }


    // public Orders(long orderId, double orderPrice, int quantity, List<Specs> specs, Customer customer) {
    //     this.orderId = orderId;
    //     this.orderPrice = orderPrice;
    //     this.quantity = quantity;
    //     this.specs = specs;
    //     this.customer = customer;
    // }

    

    

}
