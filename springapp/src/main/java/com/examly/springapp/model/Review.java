package com.examly.springapp.model;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Review {
    @Id
    @GeneratedValue
    private int reviewId;
    @ManyToOne
    @JoinColumn(name = "customer_id")
    private Customer customer;
    private String subject;
    private String body;
    private int rating ;
    private Date dateCreated;

    public int getReviewId() {
        return reviewId;
    }
    public void setReviewId(int reviewId) {
        this.reviewId = reviewId;
    }
    public Customer getCustomer() {
        return customer;
    }
    public void setCustomer(Customer customer) {
        this.customer = customer;
    }
    public String getSubject() {
        return subject;
    }
    public void setSubject(String subject) {
        this.subject = subject;
    }
    public String getBody() {
        return body;
    }
    public void setBody(String body) {
        this.body = body;
    }
    public int getRating() {
        return rating;
    }
    public void setRating(int rating) {
        this.rating = rating;
    }
    public Date getDateCreated() {
        return dateCreated;
    }
    public void setDateCreated(Date dateCreated) {
        this.dateCreated = dateCreated;
    }


    // public Review() {
    // }
    // public Review(int reviewId, Customer customer, String subject, String body, int rating, Date dateCreated) {
    //     this.reviewId = reviewId;
    //     this.customer = customer;
    //     this.subject = subject;
    //     this.body = body;
    //     this.rating = rating;
    //     this.dateCreated = dateCreated;
    // }

    

}
