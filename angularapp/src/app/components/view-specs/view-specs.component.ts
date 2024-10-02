import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Specs } from 'src/app/models/specs.model';
import { SpecsService } from 'src/app/services/specs.service';

@Component({
  selector: 'app-view-specs',
  templateUrl: './view-specs.component.html',
  styleUrls: ['./view-specs.component.css']
})
export class ViewSpecsComponent implements OnInit {

  specs:Specs;
  selectSpecs:any;
  // newSpecs:any;

  constructor(private service:SpecsService,private route:Router) { }

  ngOnInit(): void {
    this.viewAllSpecs();
  }

  viewAllSpecs(){
    this.service.viewAllSpecs().subscribe(data=>{
      this.specs=data;
    })
  }

  editSpecList(specs:any){
    this.route.navigate(['/admin/dashboard/edit-specs/',specs.specsId],{ queryParams: { 'selectData':specs.specsId} });
    console.log(specs);
    }

  deleteSpecList(specsId:any){
    this.service.deleteSpecs(specsId).subscribe(data=>{
      console.log(data);
      
      this.ngOnInit();
    })
  }

  // Delete spec popup

  // openForm() {
  //   document.getElementById("myForm").style.display = "block";
  //   // document.getElementById("blur").css("filter","blur(2px)")
  // }
 
  // bid:number=0;
  // isPopupVisible : boolean = false;
 
  // showPopup(id:number): void {
   
  //   this.bid=id;
  //   this.isPopupVisible = true;
  // }
 
  //   delete() {
  //       this.deleteSpecList(this.bid);
  //       this.isPopupVisible = false;
       
  //   }
 
  //   cancel() {
  //       this.isPopupVisible = false;
  //   }
}
