import { Component, OnInit } from '@angular/core';
import { log } from 'console';
import { element } from 'protractor';
import { Order } from 'src/app/models/order.model';
import { User } from 'src/app/models/user.model';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.component.html',
  styleUrls: ['./view-orders.component.css']
})
export class ViewOrdersComponent implements OnInit {

  order:Order[]=[];
  user:User;
  specs:any[]=[];

  constructor(private service:OrderService) { }

  ngOnInit(): void {
    this.viewAllOrder();
  }

  viewAllOrder(){
    this.service.viewAllOrders().subscribe(data=>{
      // this.order=data;
    
      // console.log(data);

    

      data.forEach(element => {
        let newelement='';
        element.specs.forEach(element => {
          newelement+=element.name
        });
        this.specs.push(newelement);
      });

      console.log(this.specs);

      for (let index = 0; index < data.length; index++) {
       
        let newObj = {...data[index],specs:this.specs[index]}
        this.order.push(newObj);
      }
      
      console.log(this.order);
      
      

      
    })
  }



  viewOrderByUserId(){
    this.service.viewOrderByUserId(this.user.id).subscribe(data=>{

    })
  }

  // viewOrderByCustomerId(customerId:number){
  //   this.service.viewOrderByCustomerId(parseInt(localStorage.getItem('customerId'))).subscribe(data=>{
  //       console.log("Orders: "+customerId);
        
  //   })
  // }


}
