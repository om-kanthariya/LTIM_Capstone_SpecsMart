import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cart } from 'src/app/models/cart.model';
import { Customer } from 'src/app/models/customer.model';
import { Review } from 'src/app/models/review.model';
import { Specs } from 'src/app/models/specs.model';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css']
})
export class MyCartComponent implements OnInit {


  cart: any;
  customer: Customer;
  specs: Specs[];
  review: Review;
  cartId:any;
  quantities:any[]=[];
  totalPrice:number;

  // cartEmpty:boolean=false;



  constructor(private service:CartService,private toastr:ToastrService,private route:Router,private orderService:OrderService) { }

  ngOnInit(): void {
    this.getAllSpecsFromCart();
   
  }

  // getFullPrice(){
  //   for (let index = 0; index < this.specs.length; index++) {
  //      this.totalPrice = this.specs[index].price;
      
  //   }
  //   console.log(this.totalPrice);
    
  // }


  updateCart(){
    this.service.updateCart(this.cart.cartId,this.cart).subscribe(data=>{

    })
  }

  getAllSpecsFromCart(){
    this.service.getAllSpecsFromCart(localStorage.getItem('customerId')).subscribe(data=>{
      this.specs = data.specs;
      this.cartId=data.cartId;
      this.totalPrice=0;
      data.specs.forEach((element,index) => {
        this.totalPrice += parseInt(element.price);
        this.quantities[index]=1;
      });

      
      this.service.setTotalCartItems(this.specs?.length);
      console.log("omkkk");
      console.log(data);
      console.log("harshla");
    })
  }

  // setTotalPrice(){
  //   this.orderService.setGrandTotal(this.totalPrice);
  // }

  removeSpecsFromCart(specsId:number){
    this.service.removeSpecsFromCart(this.cartId,specsId).subscribe(data=>{
      console.log(data);
    });
    this.getAllSpecsFromCart();

    this.ngOnInit();
    this.toastr.success("Spec deleted!!");
    // alert(specsId);
  }

  checkout(){
    this.specs.forEach((element,index) => {
      this.totalPrice += element.price*this.quantities[index];
    });
    this.route.navigate(['/customer/place-order'],{queryParams: {'quantities':this.quantities,'totalPrice':this.totalPrice}});

  }
 
  removeAllSpecsFromCart(){
    this.service.removeAllSpecsFromCart(this.cartId).subscribe(data=>{
      // this.cartEmpty = data;
          
    })
  }

}
