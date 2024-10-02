package com.examly.springapp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.examly.springapp.model.Specs;

@Repository
public interface SpecsRepo extends JpaRepository<Specs,Long>{

    public List<Specs> findByCategory(String category);
    public List<Specs> findByNameContainingIgnoreCase(String name);
    
}
