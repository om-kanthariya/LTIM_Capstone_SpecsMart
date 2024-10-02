package com.examly.springapp.exception;

public class CustomerException extends RuntimeException{
    
    public CustomerException(String msg){
        super(msg);
    }
}
