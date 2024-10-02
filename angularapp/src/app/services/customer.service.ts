import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }

  // om = https://8080-badbfcebcfebbabfcacfdfdbaffcfadaff.premiumproject.examly.io

  //meet =  https://8080-befdffffffdfdcacfdfdbaffcfadaff.premiumproject.examly.io
  apiUrl="https://8080-befdffffffdfdcacfdfdbaffcfadaff.premiumproject.examly.io";

  registerCustomer(customer:any):Observable<any>{
    return this.http.post<any>(this.apiUrl+"/api/customer",customer);
  }

  viewCustomerById(customerId:any):Observable<any>{
    return this.http.get<any>(this.apiUrl+"/api/customer/"+customerId);
  }

  getCustomerByUserId(userId:any):Observable<any>{
    return this.http.get<any>(this.apiUrl+"/api/customer/user/"+userId);
  }

 


}
