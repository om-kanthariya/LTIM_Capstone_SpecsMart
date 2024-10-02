import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // role:string='ADMIN';
  user:User;
  loggedIn:boolean;
  registerObj:any[]=[];
  isAdminRole :boolean;

  // om = https://8080-badbfcebcfebbabfcacfdfdbaffcfadaff.premiumproject.examly.io

  //meet = https://8080-befdffffffdfdcacfdfdbaffcfadaff.premiumproject.examly.io
  public apiUrl:string="https://8080-befdffffffdfdcacfdfdbaffcfadaff.premiumproject.examly.io";

  constructor(private http:HttpClient) { 
    // this.currentUserSubject = new BehaviorSubject<string | null>(
    //   localStorage.getItem('currentUser')
    // );
    // this.currentUser = this.currentUserSubject.asObservable();

  }

  public loginUser(token){
    localStorage.setItem('token',token);
    return true; 
  }

  public isLoggedIn(){
    if(localStorage.getItem('isAdmin') == 'true' ||  localStorage.getItem('isCustomer') =='true'){
      this.loggedIn = true;
      console.log("Admin Logged"+this.loggedIn);
      
    }
    else{
      this.loggedIn = false;
      console.log("Admin Logged"+this.loggedIn);

    }
    let tokenStr=localStorage.getItem('token');
    if(tokenStr==undefined || tokenStr==''|| tokenStr==null){
      return false;
    }
    else{
      return true;
    }
    
  }

  register(user:User): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/api/register`,user);
  }
  login(user:User): Observable<any> {
        console.log("ADMIN");
    
    return this.http.post<any>(`${this.apiUrl}/api/login`,user);    
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('userId');
    localStorage.setItem('isAdmin','false');
    localStorage.setItem('isCustomer','false');
    return true;
  }

  getToken(){
    console.log("getToken() in service: "+localStorage.getItem('token'));
    return localStorage.getItem('token');
  }

  setToken(){

  }
  setUser(user){
      return localStorage.setItem('user',JSON.stringify(user));
  }

  getUser(){
    let useStr = localStorage.getItem('user');
    if(useStr!=null){
      return JSON.parse('user');
    }
    else{
      this.logout();
      return null;
    }
  }
  public getUserRole(){
    let user = this.getUser();
    return user.role;
  }

  // Check for admin or customer

  isAdmin(): boolean {
    // Check if the user has the 'admin' role based on your token structure
    const token = localStorage.getItem('role');
    console.log(token);
   
    if(token === 'ADMIN'){
      return true;
   
    }
    return false; // Return false if the token is not present or doesn't have 'admin' role
  }
 
  isCustomer(): boolean {
    // Check if the user has the 'admin' role based on your token structure
    const token = localStorage.getItem('role');
    if (token === 'CUSTOMER') {
      console.log("token:"+token);
      return true;
    }
    return false; // Return false if the token is not present or doesn't have 'admin' role
  }
 
}
