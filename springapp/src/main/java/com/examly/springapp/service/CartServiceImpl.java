package com.examly.springapp.service;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.examly.springapp.model.Cart;
import com.examly.springapp.model.Customer;
import com.examly.springapp.model.Specs;
import com.examly.springapp.model.User;
import com.examly.springapp.repository.CartRepo;
import com.examly.springapp.repository.CustomerRepo;
import com.examly.springapp.repository.SpecsRepo;
import com.examly.springapp.repository.UserRepo;

@Service
public class CartServiceImpl implements CartService{

     private Logger logger = LoggerFactory.getLogger(CartServiceImpl.class);


    @Autowired
    private CartRepo cartRepo;

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private CustomerRepo customerRepo;

    @Autowired
    private SpecsRepo specsRepo;

    @Override
    public Cart addCart(Cart cart) {
        
        logger.info("Add Cart Api Service Entry Point");

        List<Specs> addSpecs = new ArrayList<>();
        Customer c = customerRepo.findById(cart.getCustomer().getCustomerId()).get();
        List<Specs> s = cart.getSpecs();
        logger.info("Add cart List of specs entered.");

        for (Specs specs : s) {
            Specs newSpec = specsRepo.findById(specs.getSpecsId()).get();
            addSpecs.add(newSpec);
        }
        cart.setSpecs(addSpecs);
        cart.setCustomer(c);
        logger.info("Add Cart Api Service End Point");
        return cartRepo.save(cart);
    }

    @Override
    public Cart editCart(long cartId, Cart updatedCart) {
        logger.info("Edit Cart Api Service Entry Point");
        List<Specs> addedSpecs = new ArrayList<>();
        Cart cart = cartRepo.findById(cartId).get();
        addedSpecs = cart.getSpecs();
        Specs newSpec = specsRepo.findById(updatedCart.getSpecs().get(0).getSpecsId()).get();
 
        addedSpecs.add(newSpec);
 
       if(cartRepo.existsById(cartId)){
           updatedCart.setCartId(cartId);
           updatedCart.setSpecs(addedSpecs);
        logger.info("Edit Cart Api Service End Point");

        return cartRepo.save(updatedCart);
       }else{
        return null;
       }
    }

    @Override
    public Cart removeAllSpecs(long cartId) {
        logger.info("Remove all specs Api service");
       if(cartRepo.existsById(cartId)){
        Cart c = cartRepo.findById(cartId).get();
        c.getSpecs().clear();
        logger.info("Remove all specs Done "+c);

         return cartRepo.save(c);
        }else{
            return null;
        }
    }

    @Override
    public Cart removeSpecsFromCart(long cartId, long specsId) {

        logger.info("remove specs from cart Api Service Entry Point");

        if(cartRepo.existsById(cartId)){
            Cart c = cartRepo.findById(cartId).get();
           List<Specs> s= c.getSpecs();
           int index =-1;
           for (Specs sp : s) {
            if(sp.getSpecsId()==specsId){
                index = s.indexOf(sp);
                // s.remove(sp);
            }
           }
           s.remove(index);
           c.setSpecs(s);
        logger.info("remove specs from Cart Api Service End Point");
           return cartRepo.save(c);
           
            }else{
        logger.error("remove specs from Cart Api Service return null ");
                return null;
            }
    }

    @Override
    public Cart viewCartByUserId(long userId) {
        logger.info("view cart by user id Cart Api Service End Point");

       if(userRepo.existsById(userId)){
        User u= userRepo.findById(userId).get();
        Customer c=customerRepo.findByUser(u);
        Cart cart= cartRepo.findByCustomer(c);
        return cart;
       }
       else{
        return null;
       }
    }

    @Override
    public Cart viewCartByCustomerId(long customerId) {
        logger.info("view cart by customer  id Api Service End Point");
       if(customerRepo.existsById(customerId)){
        Customer c=customerRepo.findById(customerId).get();
        Cart cart=cartRepo.findByCustomer(c);
        logger.info("view cart by customer id" + c);

        return cart;
       }else{
        logger.error("Null entry point from view cart by customer id");
        return null;
       }
    }

    
    
    
}
