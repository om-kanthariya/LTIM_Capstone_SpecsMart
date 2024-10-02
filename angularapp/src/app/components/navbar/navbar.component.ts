import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { LoginComponent } from '../login/login.component';
import { Router,NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loggedIn:boolean=false;
  
  constructor(public service:AuthService,private router:Router) { 
    // if(localStorage.getItem('isAdmin') == 'true' ||  localStorage.getItem('isCustomer') =='true'){
    //   this.loggedIn = true;
    //   console.log("Admin Logged"+this.loggedIn);
      
    // }
    // else{
    //   this.loggedIn = false;
    //   console.log("Admin Logged"+this.loggedIn);

    // }
  }
  

  ngOnInit(): void {
    // NOTE: Event Listener to check if navigation has end.
    this.service.isLoggedIn();
    this.router.events.subscribe((event)=>{
      if(event instanceof NavigationEnd){
        const hiddenRoutes = ['/registration','/login','/']
        this.loggedIn = !hiddenRoutes.includes(event.url);
        console.log(this.loggedIn);
      }
    });
  }


}
