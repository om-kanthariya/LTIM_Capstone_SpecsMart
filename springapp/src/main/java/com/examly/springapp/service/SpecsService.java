package com.examly.springapp.service;

import java.util.List;

import com.examly.springapp.model.Specs;

public interface SpecsService {

    public Specs addSpecs(Specs specs);
    public List<Specs> getAllSpecs();
    public Specs editSpecs(long specsId, Specs updatedSpecs);
    public Specs deleteSpecs(long specsId);
    public Specs getSingleSpecs(long specsId);
    public List <Specs> getSpecsByCategory(String category);
    public List<Specs> searchSpecsByName(String name);
    public Specs updateQuantity(long specsId,Specs specs);
}
