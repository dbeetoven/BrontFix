import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'app/Services/authentification/authentification.service';
@Component({
  selector: 'ms-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public navbarOpen = false

  constructor(public _authFservice: AuthentificationService) {}

  /**
   * @description toggle navbar when media queries is less than 920 px
   * @author dbeetoven
   * @date 2018-12-16
   * @memberof TopnavComponent
   */
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen
  }

  /**
   * @description loggin by google firebase google api.
   * @author dbeetoven
   * @date 2018-12-16
   * @memberof TopnavComponent
   */
  login() {
    this._authFservice.loginWithGoogle()
  }
  ngOnInit() {
    // this.isLoggedIn = this.authenticate.getUserStatus();
    // mercado-servicios-166615.firebaseapp.co
  }

}
