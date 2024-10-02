package com.examly.springapp.service;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examly.springapp.model.Customer;
import com.examly.springapp.model.Orders;
import com.examly.springapp.model.Specs;
import com.examly.springapp.repository.CustomerRepo;
import com.examly.springapp.repository.OrderRepo;
import com.examly.springapp.repository.SpecsRepo;

@Service
public class OrderServiceImpl implements OrderService{

    private Logger logger = LoggerFactory.getLogger(OrderServiceImpl.class);


    @Autowired
    private OrderRepo orderRepo;

    @Autowired
    private CustomerRepo customerRepo;

    @Autowired
    private SpecsRepo specsRepo;

    @Override
    public Orders addOrder(Orders order) {
        logger.info("addOrder Api entry point.");
         List<Specs> addSpecs = new ArrayList<>();
        Customer c = customerRepo.findById(order.getCustomer().getCustomerId()).get();
        List<Specs> s = order.getSpecs();
        for (Specs specs : s) {
            Specs newSpec = specsRepo.findById(specs.getSpecsId()).get();
            addSpecs.add(newSpec);
        }
        order.setSpecs(addSpecs);
        order.setCustomer(c);
        logger.info("addOrder Api End point.");

       return orderRepo.save(order);
    }

    @Override
    public List<Orders> getAllOrders() {
        logger.info("getAllOrders Api entry point.");
       
        return orderRepo.findAll();
    }

    @Override
    public Orders getOrderById(long orderId) {
        logger.info("getOrderById Api entry point.");
        if(orderRepo.existsById(orderId)){
        logger.info("Order Id found.");
            Orders orders = orderRepo.findById(orderId).get();
            return orders;
        }else{
            logger.error("Order Id not found.");
            return null;
        }
    }

    @Override
    public List<Orders> getOrdersByCustomerId(long customerId) {
        logger.info("getOrdersByCustomerId Api entry point.");
       if(customerRepo.existsById(customerId)){

        Customer c = customerRepo.findById(customerId).get();
            return orderRepo.findByCustomer(c);

       }else{
        return null;
       }
    }

    @Override
    public List<Orders> getOrdersByUserID(long userId) {
        // TODO Auto-generated method stub
        return null;
    }

    
    
}
