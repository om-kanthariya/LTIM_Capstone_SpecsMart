package com.examly.springapp.service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examly.springapp.exception.CustomerException;
import com.examly.springapp.exception.ResourceNotFoundException;
import com.examly.springapp.model.Customer;
import com.examly.springapp.model.User;
import com.examly.springapp.repository.CustomerRepo;
import com.examly.springapp.repository.UserRepo;

import jakarta.transaction.Transactional;

@Service
public class CustomerServiceImpl implements CustomerService {


         private Logger logger = LoggerFactory.getLogger(CustomerServiceImpl.class);



    @Autowired
    private CustomerRepo customerRepo;

    @Autowired
    private UserRepo userRepo;

    @Override
    public List<Customer> getAllCustomers() {
        return customerRepo.findAll();
    }

    @Override
    public Customer getCustomerById(long customerId) {

        logger.info("getCustomerById Api Service End Point");

       if(customerRepo.existsById(customerId)){
        Customer c = customerRepo.findById(customerId).get();
        return c;
       }else{
        logger.error("getCustomerById Api Service End Point return null");
        return null;
       }
    }

    @Override
    public Customer getCustomerByUserId(long userId) {
        logger.info("getCustomerByUserId Api Service End Point");

        if(userRepo.existsById(userId)){
            User u = userRepo.findById(userId).get();
            return customerRepo.findByUser(u);
        }else{
        logger.error("Id not found in this get customer by user ");
            
            return null;
        }
    }

    @Transactional
    @Override
    public Customer registerCustomer(Customer customer)throws CustomerException {

        logger.info("register Customer api entry point");

        try {
            User u = userRepo.findById(customer.getUser().getUserId()).get();
          if(u.getRole().equals("CUSTOMER")){
            if(customerRepo.existsByUser(u)){
            throw new CustomerException("Customer Already Exist with Provided User Email.");
            }else{
                logger.error("New customer created");
                customer.setUser(u);
                return  customerRepo.save(customer);
            }
          }else{
              logger.error("Admin can not be a customer"); 
            throw new CustomerException("Admin can not be a Customer");
          }
        }catch(CustomerException ex){
            throw new CustomerException(ex.getMessage());
        } 
        catch (Exception e) {
            logger.error("User with Specified ID not exist");
            throw new ResourceNotFoundException("User with Specified ID not exist");
        }
          
        
        
    }
    
    
}
