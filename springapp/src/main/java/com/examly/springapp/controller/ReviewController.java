package com.examly.springapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.examly.springapp.model.Review;
import com.examly.springapp.service.ReviewService;

@RestController
public class ReviewController {
    
    @Autowired
    private ReviewService reviewService;


    @GetMapping("/api/review")
    public ResponseEntity<List<Review>> viewAllReviews(){
        List<Review> rList = reviewService.getAllReview();

        if(rList!=null){
            return new ResponseEntity<>(rList,HttpStatus.OK);
        }else{
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);

        }
    }

    @DeleteMapping("/api/review/{reviewId}")
    public ResponseEntity<Review> deleteReview(@PathVariable int reviewId){
        Review review = reviewService.deleteReview(reviewId);

        if(review!=null){
            return new ResponseEntity<>(review,HttpStatus.OK);
        }else{
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);

        }
    }
    
    @PostMapping("/api/review")
    public ResponseEntity<Review> addReview(@RequestBody Review review){
        Review addedReview = reviewService.addReview(review);
        
        if(addedReview!=null){
            return new ResponseEntity<>(addedReview,HttpStatus.CREATED);
        }else{
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);

        }
    }
}
