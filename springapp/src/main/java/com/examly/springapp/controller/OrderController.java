package com.examly.springapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.examly.springapp.model.Orders;
import com.examly.springapp.service.OrderService;

@RestController
public class OrderController {
    
    @Autowired
    private OrderService orderService;

    @GetMapping("/api/order")
    public ResponseEntity<List<Orders>> viewAllOrders(){

        List<Orders> oList = orderService.getAllOrders();
        if(oList!=null){
            return new ResponseEntity<>(oList,HttpStatus.OK);
        }else{
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }
    @PostMapping("/api/order")
    public ResponseEntity<Orders> addOrder(@RequestBody Orders order){

        Orders addedOrder = orderService.addOrder(order);
        if(addedOrder!=null){
            return new ResponseEntity<>(addedOrder,HttpStatus.CREATED);
        }else{
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }
    @GetMapping("/api/order/user/{userId}")
    public ResponseEntity<List<Orders>> viewOrderByUserId(@PathVariable long userId){

        List<Orders> oList = orderService.getOrdersByUserID(userId);
        if(oList!=null){
            return new ResponseEntity<>(oList,HttpStatus.OK);
        }else{
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    @GetMapping("/api/order/customer/{customerId}")
    public ResponseEntity<List<Orders>> viewOrderByCustomerId(@PathVariable long customerId){

        List<Orders> oList = orderService.getOrdersByCustomerId(customerId);
        if(oList!=null){
            return new ResponseEntity<>(oList,HttpStatus.OK);
        }else{
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }
}
