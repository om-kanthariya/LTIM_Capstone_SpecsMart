import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Specs } from '../models/specs.model';
import { Cart } from '../models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {


  cartItemList:any[];
  specList = new BehaviorSubject<any>([]);

  // om = https://8080-badbfcebcfebbabfcacfdfdbaffcfadaff.premiumproject.examly.io
  //meet =  https://8080-befdffffffdfdcacfdfdbaffcfadaff.premiumproject.examly.io
  // apiUrl="https://8080-befdffffffdfdcacfdfdbaffcfadaff.premiumproject.examly.io";
  totalCart:any;
  apiUrl="https://8080-befdffffffdfdcacfdfdbaffcfadaff.premiumproject.examly.io";
  constructor(private http:HttpClient) { }

  updateCart(cartId:number,cartDetails:any):Observable<any>{
    return this.http.put(this.apiUrl+"/api/cart/"+cartId,cartDetails);
  }
 
  getAllSpecsFromCart(customerId:any):Observable<any>{
    return this.http.get(this.apiUrl+"/api/cart/customer/"+customerId);
  }

  setCart(specs:Specs){
    this.cartItemList.push({...specs});
    this.specList.next(specs);
  }
 
  addCart(cart:any):Observable<any>{
    console.log("om");
    console.log(cart);
    console.log("harshala");
    // this.getTotalPrice();
    return this.http.post(this.apiUrl+"/api/cart",cart);
  }
  // getTotalPrice(){
  //   let grandTotal = 0;
  //   this.cartItemList.map((a)=>{
  //     grandTotal+=a.total;
  //   })
  // }
 
  removeSpecsFromCart(cartId:number, specsId:number):Observable<any>{
    return this.http.delete(this.apiUrl+"/api/cart/"+cartId+"/specs/"+specsId);
  }
 
  removeAllSpecsFromCart(cartId:number):Observable<any>{
    return this.http.delete(this.apiUrl+"/api/cart/"+cartId);
  }
 
  addReview(review:any):Observable<any>{
    return this.http.post(this.apiUrl+"/api/review",review);
  }
 
  // get and set the number of cart
  setTotalCartItems(totalCart:number){
    this.totalCart = totalCart;
  }

  getTotalCartItems(){
    return this.totalCart;
  }

  getAllReviews():Observable<any>{
    return this.http.get(this.apiUrl+"/api/review");
  }

  getCartByCustomerId(customerId:any):Observable<any>{
    return this.http.get(this.apiUrl+"/api/cart/customer/"+customerId)
  }
 
}
