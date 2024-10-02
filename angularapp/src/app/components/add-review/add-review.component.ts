import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Review } from 'src/app/models/review.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {

  review:Review[];
  showAlert:boolean=false;
  addReviewForm:FormGroup;
  addReviewCustomer:any;
  
  constructor(private fb:FormBuilder,private toastr:ToastrService,private service:CartService,private route:Router) { }

  ngOnInit(): void {
    this.addReviewForm=this.fb.group({
      id:[''],
      customerId:[''],
      specsName:['',[Validators.required]],
      feedback:['',[Validators.required]],
      rating:['',[Validators.required]]
  });
  }

  addS(){
    this.showAlert=true;
    setTimeout(()=>{
      this.closeAlert();
    },3000);
  }

  successMessage(){
    this.toastr.success("Thank you for your review!!");
  }

  addReview(){
    let ob = {customer:{customerId:localStorage.getItem('customerId')},subject:this.addReviewForm.value.specsName,body:this.addReviewForm.value.feedback,rating:this.addReviewForm.value.rating,dateCreated:new Date()}
    this.service.addReview(ob).subscribe(data=>{
      console.log(ob.rating);
      
      this.addReviewCustomer = data; 
      console.log(data);
      this.route.navigate(['/customer/add-review']);
    });
  }

  

  closeAlert(){
    this.showAlert=false;
  }

}
