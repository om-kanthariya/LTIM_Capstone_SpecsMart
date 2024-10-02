import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, NgForm, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registerForm:FormGroup;
  errorMessage:string='';
 
 // registerObj:any[]=[];
 registerDetails={
   username:'',
   email:'',
   password:'',
   confirmPassword:'',
   mobileNumber:'',
   role:''
  }
   
  
  constructor( private fb:FormBuilder,private toastr:ToastrService,private route:Router,private service:AuthService) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username:['',[Validators.required,Validators.minLength(5),Validators.maxLength(15)]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$')]],
      confirmPassword:['',[Validators.required]],
      mobileNumber:['',[Validators.required,Validators.pattern('[0-9]{10}')]],
      role:['',[Validators.required]]
    },
    // {
    //   validators:this.passwordMismatch,
    // }
    )
  }

  passwordMismatch(registerForm:AbstractControl){
    return this.registerForm.get('password').value === this.registerForm.get('confirmPassword').value
    ? null 
    :{mismatch:true};

    
  }
 
  register(){
    
    this.service.register(this.registerForm.value).subscribe(data=>{
      this.registerDetails = data;
      console.log(data);
      this.toastr.success("Registration done successfully");
      this.route.navigate(['/login']);
    },er=>{
      this.errorMessage = er.error;
      this.toastr.warning(this.errorMessage);
      console.log("erro "+(er.error));
    })
   
}
}
