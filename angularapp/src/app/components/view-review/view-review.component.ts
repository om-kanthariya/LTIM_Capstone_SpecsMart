import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Review } from 'src/app/models/review.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-view-review',
  templateUrl: './view-review.component.html',
  styleUrls: ['./view-review.component.css']
})
export class ViewReviewComponent implements OnInit {

  reviews:Review;


  constructor(private service:CartService) { }

  ngOnInit(): void {
    this.getAllReview()
  }

  getAllReview(){
    this.service.getAllReviews().subscribe(data=>{
      this.reviews=data;
    })
  }
 
}
