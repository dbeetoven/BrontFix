import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ms-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss'],
  providers: []
})
export class TopnavComponent implements OnInit {

  public isLoggedIn;
  public navbarOpen = false;


  constructor() { }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  ngOnInit() {
    // this.isLoggedIn = this.authenticate.getUserStatus();
  }


}
