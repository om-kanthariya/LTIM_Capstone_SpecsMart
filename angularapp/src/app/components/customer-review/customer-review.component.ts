import { Component, OnInit } from '@angular/core';
import { Review } from 'src/app/models/review.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-customer-review',
  templateUrl: './customer-review.component.html',
  styleUrls: ['./customer-review.component.css']
})
export class CustomerReviewComponent implements OnInit {

  reviews:Review;
  constructor(private service:CartService) { }

  ngOnInit(): void {
    this.getAllReviews();
  }

  getAllReviews(){
    this.service.getAllReviews().subscribe(data=>{
      this.reviews=data;
      console.log(data);
      
    })
  }

}
