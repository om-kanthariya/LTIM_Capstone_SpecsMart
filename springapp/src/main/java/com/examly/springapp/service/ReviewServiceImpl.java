package com.examly.springapp.service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examly.springapp.model.Customer;
import com.examly.springapp.model.Review;
import com.examly.springapp.model.User;
import com.examly.springapp.repository.CustomerRepo;
import com.examly.springapp.repository.ReviewRepo;
import com.examly.springapp.repository.UserRepo;

@Service
public class ReviewServiceImpl implements ReviewService{

       private Logger logger = LoggerFactory.getLogger(ReviewServiceImpl.class);


    @Autowired
    private ReviewRepo reviewRepo;

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private CustomerRepo customerRepo;

    @Override
    public Review addReview(Review review) {

      logger.info("addReview Api entry point.");

      Customer c = customerRepo.findById(review.getCustomer().getCustomerId()).get();
      review.setCustomer(c);
       Review r = reviewRepo.save(review);
       logger.info("Added review for add review function"+r);

       return r;
    }

    @Override
    public List<Review> getAllReview() {
        return reviewRepo.findAll();
    }

    @Override
    public Review getReviewById(int reviewId) {

      logger.info("Entered getReviewById function with ID"+ reviewId);

       if(reviewRepo.existsById(reviewId)){
        Review r = reviewRepo.findById(reviewId).get();
        return r;
       }else{
        return null;
       }
    }

   @Override
    public Review deleteReview(int reviewId) {

      logger.info("Entered deleteReview function with ID"+ reviewId);

       if(reviewRepo.existsById(reviewId)){
        Review r = reviewRepo.findById(reviewId).get();
        reviewRepo.deleteById(reviewId);
        return r;
       }else{
        return null;
       }
    }

    @Override
    public List<Review> getReviewByUserId(long userId) {

       User u = userRepo.findById(userId).get();

       Customer c = customerRepo.findByUser(u);

       return reviewRepo.findReviewByCustomer(c);
    }
    
    
}
