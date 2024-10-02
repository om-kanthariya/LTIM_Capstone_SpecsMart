package com.examly.springapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ReactiveAdapter;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.examly.springapp.model.Cart;
import com.examly.springapp.service.CartService;

@RestController
public class CartController {
    
    @Autowired
    CartService cartService;

    @PostMapping("/api/cart")
    public ResponseEntity<Cart> addCart(@RequestBody Cart cart ){
        Cart cartAdded =cartService.addCart(cart);
        if(cartAdded!=null){
            return new ResponseEntity<>(cartAdded,HttpStatus.CREATED);
        }else{
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/api/cart/{cartId}")
    public ResponseEntity<Cart> editCart(@RequestBody Cart cart,@PathVariable long cartId){
        Cart updatedCart= cartService.editCart(cartId, cart);
        if(updatedCart!=null){
            return new ResponseEntity<>(updatedCart,HttpStatus.OK);
        }else{
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/api/cart/userId/{userId}")
    public ResponseEntity<Cart> viewCartByUserId(@PathVariable long userId){
        Cart c= cartService.viewCartByUserId(userId);
        if(c!=null){
            return new ResponseEntity<>(c,HttpStatus.OK);
        }
        else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/api/cart/customer/{customerId}")
    public ResponseEntity<Cart> viewCartByCustomerId(@PathVariable long customerId){
        Cart c= cartService.viewCartByCustomerId(customerId);
        if(c!=null){
            return new ResponseEntity<>(c,HttpStatus.OK);
        }
        else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/api/cart/{cartId}/specs/{specsId}")
    public ResponseEntity<Cart> removeSpecsFromCart(@PathVariable long cartId,@PathVariable long specsId){
        Cart cart = cartService.removeSpecsFromCart(cartId, specsId);
        if(cart!=null){
            return new ResponseEntity<>(cart,HttpStatus.OK);
        }else{
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/api/cart/{cartId}")
    public ResponseEntity<Cart>removeAllSpecs(@PathVariable long cartId){
        Cart cart =cartService.removeAllSpecs(cartId);
        if(cart!=null){
            return new ResponseEntity<>(cart,HttpStatus.OK);
        }else{
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
