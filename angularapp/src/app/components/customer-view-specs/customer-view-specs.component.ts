import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cart } from 'src/app/models/cart.model';
import { Customer } from 'src/app/models/customer.model';
import { Specs } from 'src/app/models/specs.model';
import { CartService } from 'src/app/services/cart.service';
import { SpecsService } from 'src/app/services/specs.service';

@Component({
  selector: 'app-customer-view-specs',
  templateUrl: './customer-view-specs.component.html',
  styleUrls: ['./customer-view-specs.component.css']
})
export class CustomerViewSpecsComponent implements OnInit {
  specs:Specs[]=[];
  cart:Cart;
  customer:Customer;
  custId:any;
  cartId:any;
  // categories:string='';
  categoryArray:string[]=["All","Sun Glasses","Eye Glasses","Computer Glasses","Sports Glasses","Price Low to High"]
  viewAllSpecs(){
    this.service.viewAllSpecs().subscribe(data=>{
      this.specs=data;
    })
  }

  addCart(item:any){
    console.log("Cart Service");
    let newCart={totalAmount:parseFloat(item.price),customer:{customerId:this.custId},specs:[{specsId:item.specsId}]}

    if(this.cartId){
      console.log("ppl");
          this.servicec.updateCart(this.cartId,newCart).subscribe(data=>{
            console.log(data);
            this.toastr.success("Cart added successfully");
            
          });
    }else{
      this.servicec.addCart(newCart).subscribe(data=>{
        console.log(data);
        this.toastr.success("Cart added successfully");

      })
    }
  }
  customerViewForm:FormGroup;
  constructor(private servicec:CartService,private toastr:ToastrService,private route:Router,private service:SpecsService) { }

  ngOnInit(): void {
      this.custId = parseInt(localStorage.getItem('customerId'));
      console.log(this.custId);
      this.viewCartByCustomerId();
      this.viewAllSpecs();
   
  }

  viewCartByCustomerId(){
    this.servicec.getCartByCustomerId(localStorage.getItem('customerId')).subscribe(data=>{
      console.log(data);
      this.cartId = data.cartId;
    })
  }

  sortProductsAsc(){
    this.specs = this.specs.sort((a, b) => b.price - a.price);
  }

  submit(){
  }

  getSpecsByCategory(categories:string){
    this.service.findByCategorySpecs(categories).subscribe(data=>{
      this.specs=data;
      console.log(data);
    })    
  }

  searchByName(name:string){
    console.log("om");
    
    this.service.searchSpecsByName(name).subscribe(data=>{
      this.specs=data;
      console.log(data);

    })
    console.log(name);
    
  }

}
