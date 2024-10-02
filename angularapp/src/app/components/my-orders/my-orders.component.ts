import { Component, Input, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order.model';
import { Specs } from 'src/app/models/specs.model';
import { User } from 'src/app/models/user.model';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {
    order:any;
    user:User;
    items:Specs[]=[];
    sumOfPrice:number=0;
    allOrdersPrice:number[]=[];
    viewOrderByUserId(){
      this.service.viewOrderByUserId(this.user.id).subscribe(data=>{
        
      })
    }
  viewOrderByCustomerId(){
    this.service.viewOrderByCustomerId(parseInt(localStorage.getItem("customerId"))).subscribe(data=>{
      this.order=data;
      // this.items.push(this)
      this.order.forEach(element => {
        // let collection:any = [...element.specs]
        element.specs.forEach(ele=>{
        this.items.push(ele);
          this.allOrdersPrice.push(parseInt(ele.price));
        })
        // this.items.push(element.specs);

        
      });
      this.allOrdersPrice.forEach((price)=>{
        this.sumOfPrice=this.sumOfPrice+price;
      });
      console.log(this.allOrdersPrice);
      console.log(this.sumOfPrice);
      
      console.log(this.items);      
      console.log(data);
      
    })
  }
  // viewAllOrder(){
  //   this.service.viewAllOrders().subscribe(data=>{
  //     this.order=data;
  //     console.log("123456789sdfghjkl");
      
  //     console.log(data);
      
  //   })
  // }

  addOrder(){
    this.service.addOrder(this.order).subscribe(data=>{

    })
  }

  constructor(private service:OrderService) { }

  ngOnInit(): void {
    this.viewOrderByCustomerId();
  }

}
