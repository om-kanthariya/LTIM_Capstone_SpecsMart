package com.examly.springapp.service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examly.springapp.exception.ResourceNotFoundException;
import com.examly.springapp.exception.SpecsNameException;
import com.examly.springapp.model.Specs;
import com.examly.springapp.repository.SpecsRepo;

@Service
public class SpecsServiceImpl implements SpecsService {

           private Logger logger = LoggerFactory.getLogger(SpecsServiceImpl.class);


    @Autowired
    private SpecsRepo specsRepo;

    @Override
    public List<Specs> getSpecsByCategory(String category) {
        if(category.equals("All")){
            return specsRepo.findAll();
        }
       return specsRepo.findByCategory(category);
    }

    @Override
    public Specs addSpecs(Specs specs) throws SpecsNameException {
        try {

           logger.info("addSpecs Api entry point.");

            Specs specsAdded = specsRepo.save(specs);
            return specsAdded;
        } catch (Exception e) {
            
           logger.error("Specs can't be added in the Mart");

            throw new SpecsNameException("Specs can't be added in the Mart. Something went wrong !!");
        }
    }  

    @Override
    public Specs deleteSpecs(long specsId) throws SpecsNameException{
        try {
            Specs specs = specsRepo.findById(specsId).get();
        specsRepo.deleteById(specsId);
            logger.info("specs deleted Successfully");
        return specs;
        } catch (Exception e) {
            logger.error("Id does not Exist.");
            throw new SpecsNameException("ID does not Exist");

        }
        
    }

    @Override
    public Specs editSpecs(long specsId, Specs updatedSpecs) throws SpecsNameException {

        try {

            updatedSpecs.setSpecsId(specsId);
            Specs s = specsRepo.save(updatedSpecs);
            logger.info("Specs update successfully.");
            return s;

        } catch (Exception e) {
            logger.error("Name already Exist try with another Name.");
            throw new SpecsNameException("Name Already Exist Try with Another Name");

        }

    }

    @Override
    public List<Specs> getAllSpecs() {
        logger.info("getAllSpecs Api entry point.");
        return specsRepo.findAll();
    }

    @Override
    public Specs getSingleSpecs(long specsId) {
       if(specsRepo.existsById(specsId)){
        logger.info("specs By Id.");
        return specsRepo.findById(specsId).get();
       }else{
        logger.error("Specs Id not found.");
        return null;
       }
    }

    @Override
    public List<Specs> searchSpecsByName(String name) {
        return specsRepo.findByNameContainingIgnoreCase(name);
    }
    public Specs updateQuantity(long specId,Specs spec){
        Specs s=specsRepo.findById(specId).get();
        s.setQuantity(spec.getQuantity());
        return specsRepo.save(s);
    }

}
