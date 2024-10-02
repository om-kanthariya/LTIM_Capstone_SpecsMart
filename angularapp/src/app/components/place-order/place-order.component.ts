import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { timeStamp } from 'console';
import { ToastrService } from 'ngx-toastr';
import { Customer } from 'src/app/models/customer.model';
import { Order } from 'src/app/models/order.model';
import { CartService } from 'src/app/services/cart.service';
import { CustomerService } from 'src/app/services/customer.service';
import { OrderService } from 'src/app/services/order.service';
import { SpecsService } from 'src/app/services/specs.service';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit {
  
  showAlert:boolean=false;
  placeOrderForm:FormGroup;
  placeOrder:any;
  order:Order;
  specs:any[];
  quantities:any[]=[];
  quantity:number;
  orderPrice:number;
  customer:Customer;
  paid:boolean;
  totalPrice:number=0;
  specsCount:number;



  constructor(private service:CartService,private specService:SpecsService,private toastr:ToastrService,private orderService:OrderService,private customerService:CustomerService,private route:Router,private aRoute:ActivatedRoute,private fb:FormBuilder) { 
    this.placeOrderForm=this.fb.group({
      customerName:['',[Validators.required,Validators.minLength(4)]],
      address:['',[Validators.required]]
    });
  }

  ngOnInit(): void {
    this.customerService.viewCustomerById(localStorage.getItem('customerId')).subscribe(data=>{
      this.placeOrder = data.customerName;
      console.log(this.placeOrder);
      this.placeOrderForm.patchValue(data);
      
    });
    this.aRoute.queryParams.subscribe(data=>{
      this.quantities=data['quantities'];
      this.totalPrice=data['totalPrice'];
    })
   //this.totalPrice = this.orderService.getGrandTotal();
   console.log(this.totalPrice);
   this.getAllSpecsFromCart();
   
  }

  getAllSpecsFromCart(){
    this.service.getAllSpecsFromCart(localStorage.getItem('customerId')).subscribe(data=>{
      this.specs = data.specs;
      //this.totalPrice=0;
      this.specsCount=0;
      data.specs.forEach(element => {
        //this.totalPrice += parseInt(element.price);
        this.specsCount++;
      });

      // this.orderService.setGrandTotal(this.totalPrice,this.quantities);
      // this.service.setTotalCartItems(this.specs?.length);
      console.log("omkkk");
      console.log(data);
      console.log("harshla");
    })
  }


  payment(){
    let newOrder = {
      orderPrice:this.totalPrice,
      quantity:this.specsCount,
      specs:this.specs,
      customer:{
        customerId:parseInt(localStorage.getItem('customerId'))
      }
    }
    console.log("om23456789");
    console.log(this.specs);
    
    console.log(newOrder);
    
    this.showAlert=true;
    this.orderService.addOrder(newOrder).subscribe(data=>{
      console.log(data);  
      this.specs.forEach((element,index) => {
        let quant = element.quantity-this.quantities[index];
        const spec={
          quantity:quant
        }
        this.specService.getSpecByQuantity(element.specsId,spec).subscribe(data=>{
          console.log(data);
          
        })
        
        
      });
    })
    setTimeout(()=>{
      this.closeAlert();
    },3000);
    this.toastr.success("Order Placed!")
    this.route.navigate(['/customer/my-orders'])
    
  }

  closeAlert(){
    this.showAlert=false;
  }

  orderPlaced(){
    this.paid = false;
    this.route.navigate(['/my-orders']);
  }

}