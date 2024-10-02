package com.examly.springapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.examly.springapp.model.Specs;
import com.examly.springapp.service.SpecsService;

@RestController
public class SpecsController {
    
    @Autowired
    private SpecsService specsService;

    @PostMapping("/api/specs")
    public ResponseEntity<Specs> addSpecs(@RequestBody Specs specs){
        Specs addedSpecs = specsService.addSpecs(specs);

        if(addedSpecs!=null){
            return new ResponseEntity<>(addedSpecs,HttpStatus.CREATED);
        }else{
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);

        }
    }
    @GetMapping("/api/specs")
    public ResponseEntity<List<Specs>> viewAllSpecs(){
        List<Specs> allSpecs = specsService.getAllSpecs();

        if(allSpecs!=null){
            return new ResponseEntity<>(allSpecs,HttpStatus.OK);
        }else{
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);

        }
    }

    @GetMapping("/api/specs/{specsId}")
    public ResponseEntity<Specs> getSpecsById(@PathVariable long specsId){
        Specs s = specsService.getSingleSpecs(specsId);

        if(s!=null){
            return new ResponseEntity<>(s,HttpStatus.OK);
        }else{
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);

        }
    }

    @PutMapping("/api/specs/quantity/{specId}")
    public ResponseEntity<Specs> getSpecByQuantity(@PathVariable long specId,@RequestBody Specs specs){
        Specs getSpec = specsService.updateQuantity(specId, specs);
        if(getSpec!=null){
            return new ResponseEntity<>(getSpec,HttpStatus.OK);
        }else{
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);

        }
    }
    
    @PutMapping("/api/specs/{specsId}")
    public ResponseEntity<Specs> editSpecs(@RequestBody Specs specs , @PathVariable long specsId ){
        Specs editedSpecs = specsService.editSpecs(specsId, specs);

        if(editedSpecs!=null){
            return new ResponseEntity<>(editedSpecs,HttpStatus.OK);
        }else{
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);

        }
    }
    @DeleteMapping("/api/specs/{specsId}")
    public ResponseEntity<Specs> deleteSpecs(@PathVariable long specsId ){
        Specs deletedSpecs = specsService.deleteSpecs(specsId);

        if(deletedSpecs!=null){
            return new ResponseEntity<>(deletedSpecs,HttpStatus.OK);
        }else{
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);

        }
    }

     @GetMapping("/api/specs/category")
    public ResponseEntity<List<Specs>> viewSpecsByCategory(@RequestParam String category){
       
        List<Specs> s = specsService.getSpecsByCategory(category);
 
        if(s!=null){
            return new ResponseEntity<>(s,HttpStatus.OK);
        }else{
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
 
        }
    }

    @GetMapping("/api/specs/search")
    public ResponseEntity<List<Specs>> searchAllSpecsByName(@RequestParam String name){
       
        List<Specs> s = specsService.searchSpecsByName(name);
 
        if(s!=null && !s.isEmpty()){
            return new ResponseEntity<>(s,HttpStatus.OK);
        }else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
 
        }
    }
    

}
