import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Specs } from 'src/app/models/specs.model';
import { SpecsService } from 'src/app/services/specs.service';

@Component({
  selector: 'app-edit-specs',
  templateUrl: './edit-specs.component.html',
  styleUrls: ['./edit-specs.component.css']
})
export class EditSpecsComponent implements OnInit {

  editSpecsForm:FormGroup;
  specs:Specs;
  selectSpecs:any;
  constructor(private fb:FormBuilder,private route:ActivatedRoute,private router:Router,private service:SpecsService) {
    this.editSpecsForm=this.fb.group({
      name:['',[Validators.required,Validators.minLength(4)]],
      category:['',[Validators.required]],
      price:['',[Validators.required,Validators.min(600)]],
      description:['',[Validators.required,Validators.minLength(50)]],
      imageUrl:['',[Validators.required]],
      quantity:['',[Validators.required,Validators.min(1)]]
    });
   }

  ngOnInit(): void {
    // this.selectSpecs = {...this.specs};
    this.route.queryParams.subscribe(paramas=>{
      // this.selectSpecs = {...this.specs};
      this.selectSpecs = paramas['selectData'];
      this.editSpecsForm.patchValue(this.selectSpecs);
      this.service.getSpecsById(this.selectSpecs).subscribe(data=>{
        this.selectSpecs = data;
        console.log("Edited Data...."+this.selectSpecs.category);
      })
      
    });
  
  }

  // editSpecList(specs:Specs){
  //   this.selectSpecs = {...specs};
  //   this.service.getSpecsById(specs.specsId);
  //   }

  updateSpecs(){
    
      this.service.updateSpecs(this.selectSpecs.specsId,this.editSpecsForm.value).subscribe(data=>{
        console.log(data);
        this.router.navigate(['admin/dashboard/view-specs']);
      })
    
      
  }

  cancelSpecs(){
    
  }

}
