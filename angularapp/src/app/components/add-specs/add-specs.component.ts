import { Component, OnInit } from '@angular/core';
import { Specs } from 'src/app/models/specs.model';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SpecsService } from 'src/app/services/specs.service';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-add-specs',
  templateUrl: './add-specs.component.html',
  styleUrls: ['./add-specs.component.css']
})

export class AddSpecsComponent implements OnInit {

  showAlert:boolean=false;
  addSpecsForm:FormGroup;
  specs:Specs[];
  constructor(private fb:FormBuilder,private toastr:ToastrService,private service:SpecsService,private route:Router) { }

  ngOnInit(): void {
    this.addSpecsForm=this.fb.group({
      name:['',[Validators.required,Validators.minLength(4)]],
      category:['',[Validators.required]],
      price:['',[Validators.required,Validators.min(600)]],
      description:['',[Validators.required,Validators.minLength(50)]],
      imageUrl:['',[Validators.required]],
      quantity:['',[Validators.required,Validators.min(1)]]
  });
  }


  addS(){
    this.showAlert=true;
    setTimeout(()=>{
      this.closeAlert();
    },3000);
  }

  addSpecs(){
    this.service.addSpecs(this.addSpecsForm.value).subscribe(data=>{
      console.log(data);
      this.toastr.success("Specs added successfully")
      this.route.navigate(['/admin/dashboard/view-specs']);
    });
  }

  closeAlert(){
    this.showAlert=false;
  }

}