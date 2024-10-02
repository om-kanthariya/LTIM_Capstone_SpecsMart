package com.examly.springapp.service;

import java.util.List;

import com.examly.springapp.model.Review;

public interface ReviewService {
    public Review addReview(Review review);
    public Review getReviewById(int reviewId);
    public List<Review> getAllReview();
   public List<Review> getReviewByUserId(long userId);
   public Review deleteReview(int reviewId);

}
