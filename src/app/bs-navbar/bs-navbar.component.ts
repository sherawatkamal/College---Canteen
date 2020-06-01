import { AppUser } from './../models/app-users';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {

  // appUser: AppUser;

  constructor(public auth :AuthService ) { 
    // auth.appUser$.subscribe(appUser => this.AppUser)
   }

   logout() {
    this.auth.logout();
   }

}
