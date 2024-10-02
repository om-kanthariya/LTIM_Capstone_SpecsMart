import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User;
  loginForm:FormGroup;
  isAdminRole:boolean;
  loginDetails={
    username:'',
    password:''
  }
  role:string="";
  errorMessage:any;
  constructor(private fb:FormBuilder,private toastr:ToastrService,private route:Router,private service:AuthService) { }


  ngOnInit(): void { this.loginForm=this.fb.group({
     email:['',[Validators.required,Validators.email]],
       password:['',[Validators.required,Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$')]]
});
 
  }

  login(event:Event){
      this.service.login(this.loginForm.value).subscribe(data=>{
        event.preventDefault();
        if(data.role==='ADMIN'){
          console.log("token innlogin  "+data.token);
          localStorage.setItem('isCustomer','false');
          localStorage.setItem('isAdmin','true');
          localStorage.setItem('token',data.token);
          localStorage.setItem('userId',data.userId);
          localStorage.setItem('loginDetails',JSON.stringify(this.loginDetails));
          this.route.navigate(['/admin/dashboard/add-specs']);
         

        }
        else if(data.role==='CUSTOMER') {
          console.log("token customer innlogin  "+data.token);
          localStorage.setItem('isCustomer','true');
          localStorage.setItem('isAdmin','false');
          localStorage.setItem('token',data.token);
          localStorage.setItem('userId',data.userId);
          localStorage.setItem('loginDetails',JSON.stringify(this.loginDetails));
          this.route.navigate(['/customer/dashboard/home']);
        }
        
          this.loginDetails = data;
          this.toastr.success("Logged in successfully");
          console.log(data);
          // this.service.loginUser(data.token);
        
      },
      er=>{
        // console.log("erro "+JSON.stringify(er));
        this.errorMessage=er.error;
        this.toastr.warning(this.errorMessage);
        console.log(er.error)
      });
    }
 }

