import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Specs } from '../models/specs.model';

@Injectable({
  providedIn: 'root'
})
export class SpecsService {


  // om = https://8080-badbfcebcfebbabfcacfdfdbaffcfadaff.premiumproject.examly.io

  //meet =  https://8080-befdffffffdfdcacfdfdbaffcfadaff.premiumproject.examly.io

  apiUrl:string="https://8080-befdffffffdfdcacfdfdbaffcfadaff.premiumproject.examly.io";
  // token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJleHAiOjE3MTgxMTUzNzIsImlhdCI6MTcxODA5NzM3Mn0.JzbEMyEVxvlVx3DPOUcXCy5t-KEi5N_yERcdA9TVIbchSSyLoK1L2gwC9dk2OrrJrhga0YgxoH2b9kUclCfEtA";

  constructor(private httpClient:HttpClient) { }


  addSpecs(specs:Specs):Observable<Specs[]>{
    return this.httpClient.post<Specs[]>(this.apiUrl+"/api/specs",specs);
  }

  viewAllSpecs():Observable<any>{
    return this.httpClient.get(this.apiUrl+"/api/specs");
  }

  updateSpecs(specsId:any,specs:any):Observable<any>{
    return this.httpClient.put<any>(this.apiUrl+"/api/specs/"+specsId,specs);
  }

  getSpecsById(specsId:any):Observable<any>{
    return this.httpClient.get(this.apiUrl+"/api/specs/"+specsId);
  }

  deleteSpecs(specsId:any):Observable<any>{
    return this.httpClient.delete(this.apiUrl+"/api/specs/"+specsId);
  }

  findByCategorySpecs(category:string):Observable<any>{
    return this.httpClient.get(this.apiUrl+"/api/specs/category?category="+category);
  }

  searchSpecsByName(name:string):Observable<any>{
    return this.httpClient.get(this.apiUrl+"/api/specs/search?name="+name);
  }
  getSpecByQuantity(specsId,specs):Observable<any>{
    return this.httpClient.put<any>(this.apiUrl+"/api/specs/quantity/"+specsId,specs);

  }

}