import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isAdminRole:boolean;
  constructor(private service:AuthService) {
      this.isAdminRole = (localStorage.getItem('isAdmin') == 'true')? true:false;
      console.log("Is Admin "+this.isAdminRole);
  }

  ngOnInit(): void {
    this.service.isLoggedIn();
  }
  
  logout(){
    this.service.logout();
    console.log("Log out called..");
    
  }

  

}
