import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  totalPrice:number;
  // apiUrl="https://8080-bcbafcbddfdbcfbcacfdfdbaffcfadaff.premiumproject.examly.io";

  // om = https://8080-badbfcebcfebbabfcacfdfdbaffcfadaff.premiumproject.examly.io

  //meet =  https://8080-befdffffffdfdcacfdfdbaffcfadaff.premiumproject.examly.io
  public apiUrl="https://8080-befdffffffdfdcacfdfdbaffcfadaff.premiumproject.examly.io";


  constructor(private http:HttpClient) { }

  addOrder(orderData:any):Observable<any>{
    return this.http.post<any>(this.apiUrl+"/api/order",orderData);
  }

  setGrandTotal(totalPrice:number,quantities){
    // quantities.forEach(element => {
    //   this.totalPrice=
    // });
    this.totalPrice=totalPrice;
  }

  getGrandTotal(){
    return this.totalPrice;
  }


  viewAllOrders():Observable<any>{
    return this.http.get<any>(this.apiUrl+"/api/order");
  }



  viewOrderByUserId(userId:number):Observable<any>{
    return this.http.get<any>(this.apiUrl+"/api/order/user/"+userId);
  }

  viewOrderByCustomerId(customerId:number):Observable<any>{
    return this.http.get<any>(this.apiUrl+"/api/order/customer/"+customerId);
  }
}
