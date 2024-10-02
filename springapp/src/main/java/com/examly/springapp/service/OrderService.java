package com.examly.springapp.service;

import java.util.List;

import com.examly.springapp.model.Orders;

public interface OrderService {

    public Orders addOrder(Orders order);
    public List<Orders> getAllOrders();
    public Orders getOrderById(long orderId);
    public List<Orders> getOrdersByCustomerId(long customerId);
    public List<Orders> getOrdersByUserID(long userId);
    
}
