import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Customer } from 'src/app/models/customer.model';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customerdashboard',
  templateUrl: './customerdashboard.component.html',
  styleUrls: ['./customerdashboard.component.css']
})
export class CustomerdashboardComponent implements OnInit {

  customer:Customer;
  user:User;
  isCustomerRole:boolean;
  userDetails:any=parseInt(localStorage.getItem("userId"));
  customerForm:boolean;
  
  customerDashBoardForm:FormGroup;
  
  
  constructor(private fb:FormBuilder,private toastr:ToastrService,private route:Router,private service:CustomerService,private authService:AuthService) {
    this.isCustomerRole = (localStorage.getItem('isCustomer') == 'true')? true:false;
    console.log(this.isCustomerRole);
    this.customerByUserId();
    
  }
  
  ngOnInit(): void {
    this.customerDashBoardForm=this.fb.group({
      customerName:['',[Validators.required,Validators.minLength(4)]],
      address:['',[Validators.required]]
    });
    // console.log(this.customerByUserId());
    // this.service.viewCustomerById(this.userDetails.userId).subscribe(data=>{
    //   this.customerDashBoardForm.patchValue(data);
    // })
    
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

  logout()
  {
    this.authService.logout();
  }

  customerById(){
    this.service.viewCustomerById(this.customer.customerId).subscribe(data=>{
      this.customer=data;
      console.log(this.customer);
      
    })
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


}
