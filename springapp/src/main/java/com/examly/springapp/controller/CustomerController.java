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

import com.examly.springapp.model.Customer;
import com.examly.springapp.service.CustomerService;

@RestController
public class CustomerController {
    

    @Autowired
    private CustomerService customerService;


    @GetMapping("/api/customer/user/{userId}")
    public ResponseEntity<Customer> viewAllCustomerByUserId(@PathVariable long userId){
    
         Customer customer = customerService.getCustomerByUserId(userId);

         if(customer!=null){
            return new ResponseEntity<>(customer,HttpStatus.OK);
        }else{
             return new ResponseEntity<>(customer,HttpStatus.INTERNAL_SERVER_ERROR);
         }
    }
    @GetMapping("/api/customer")
    public ResponseEntity<List<Customer>> viewAllCustomers(){
    
          List<Customer> customers = customerService.getAllCustomers();

         if(customers!=null){
            return new ResponseEntity<>(customers,HttpStatus.OK);
        }else{
             return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
         }
    }

    @GetMapping("/api/customer/{customerId}")
    public ResponseEntity<Customer> viewCustomerById(@PathVariable long customerId){
    
          Customer customers = customerService.getCustomerById(customerId);

         if(customers!=null){
            return new ResponseEntity<>(customers,HttpStatus.OK);
        }else{
             return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
         }
    }

    @PostMapping("/api/customer")
    public ResponseEntity<Customer> customerRegister(@RequestBody Customer customer){
    
          Customer addedCustomer = customerService.registerCustomer(customer);

         if(addedCustomer!=null){
            return new ResponseEntity<>(addedCustomer,HttpStatus.CREATED);
        }else{
             return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
         }
    }

}
