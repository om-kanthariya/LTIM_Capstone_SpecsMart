import { Component, OnInit } from '@angular/core';
import { User } from './models/user.model';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angularapp';
  isAdminRole:boolean=false;
  constructor(){}

  ngOnInit(): void {
    
 
   
  }

}
