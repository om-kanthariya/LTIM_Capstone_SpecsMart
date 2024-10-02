package com.examly.springapp.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class SpecsMartExceptionHandling {

    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<String>handlingResorceNotFound(ResourceNotFoundException rs){
        return new ResponseEntity<>(rs.getMessage(),HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(UserAlreadyExistException.class)
    public ResponseEntity<String>userAlreadyExist(UserAlreadyExistException ur){
        return new ResponseEntity<>(ur.getMessage(),HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(SpecsNameException.class)
    public ResponseEntity<String>specsNameException(SpecsNameException ur){
        return new ResponseEntity<>(ur.getMessage(),HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(CustomerException.class)
    public ResponseEntity<String>customerException(CustomerException ur){
        return new ResponseEntity<>(ur.getMessage(),HttpStatus.BAD_REQUEST);
    }
    
}