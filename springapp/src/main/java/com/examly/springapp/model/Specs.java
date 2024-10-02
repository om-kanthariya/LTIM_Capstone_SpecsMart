package com.examly.springapp.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.UniqueConstraint;

@Entity
public class Specs {
    
    @Id
    @GeneratedValue
    private long specsId;
    private String name;
    private String category;
    @Column(length = 10000)
    private String imageUrl;
    private String description;
    private String price;
    private int quantity;

    public long getSpecsId() {
        return specsId;
    }

    public void setSpecsId(long specsId) {
        this.specsId = specsId;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    // public Specs(long specsId, String category, String imageUrl, String description, String price) {
    //     this.specsId = specsId;
    //     this.category = category;
    //     this.imageUrl = imageUrl;
    //     this.description = description;
    //     this.price = price;
    // }

    // public Specs() {
    // }
    

}
