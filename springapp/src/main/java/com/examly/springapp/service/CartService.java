package com.examly.springapp.service;

import java.util.List;

import com.examly.springapp.model.Cart;

public interface CartService {
    public Cart addCart(Cart cart);
    public Cart editCart(long cartId,Cart updatedCart);
    public Cart removeSpecsFromCart(long cartId,long specsId);
    public Cart removeAllSpecs(long cartId);
    public Cart viewCartByUserId(long userId);
    public Cart viewCartByCustomerId(long customerId);
}
