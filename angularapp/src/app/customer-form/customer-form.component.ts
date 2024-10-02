import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user.model';
import { Customer } from '../models/customer.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../services/customer.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {

  customerForm:boolean;
  customer:Customer;
  user:User;
  isCustomerRole:boolean;
  userDetails:any=parseInt(localStorage.getItem("userId"));
  
  customerDashBoardForm:FormGroup;
  
  constructor(private service:CustomerService,private toastr: ToastrService,private route:Router,private fb:FormBuilder) {
    this.isCustomerRole = (localStorage.getItem('isCustomer') == 'true')? true:false;
    console.log(this.isCustomerRole);
    this.customerByUserId();
   }

  


ngOnInit(): void {
  this.customerDashBoardForm=this.fb.group({
    customerName:['',[Validators.required,Validators.minLength(4)]],
    address:['',[Validators.required]]
  });
  this.customerByUserId();
}

  customerByUserId(){
    this.service.getCustomerByUserId(this.userDetails).subscribe(data=>{
      this.customer = data;  
      localStorage.setItem('customerId',data.customerId);
      console.log("om");
      if(this.customer){
        this.customerForm =false;
      }else{
        this.customerForm =true;
      }
      // console.log(this.customerForm);
    })
    this.customerForm =true;
}
registerCustomer(){

  let newCustomerData = {...this.customerDashBoardForm.value,user:{userId:this.userDetails}}
  console.log(newCustomerData);
  
  this.service.registerCustomer(newCustomerData).subscribe(data=>{
      if(data.id){
        console.log(data);
      }
    })
    this.toastr.success("Customer Details added successfully");
    this.route.navigate(['/customer/view-specs']);
}
}
