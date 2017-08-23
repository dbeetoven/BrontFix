import { Component, OnInit } from '@angular/core';

import { FirebaseService } from '../../firebase/firebase.service';
import { Router } from '@angular/router';
import { firebaseConfig } from '../../app.module';

@Component({
  selector: 'ms-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

constructor(public firebaseService: FirebaseService, private router: Router) {}
  login() {
    this.firebaseService.loginWithGoogle().then((data) => {
      // Send them to the homepage if they are logged in
      this.router.navigate(['home']);
    })
  }
  // Login con github
  loginGithub() {
    // this.firebaseService.loginWithGithub().then((data) => {
    //   // Send them to the homepage if they are logged in
    //   this.router.navigate(['../home']);
    // })
  }

loginEmail(){
    // this.firebaseService.loginWithEmail().then((data) => {
    //   // Send them to the homepage if they are logged in
    //   this.router.navigate(['../home']);
    // })
  }
  loginTwitter(){
    this.firebaseService.loginWithTwitter().then((data) => {
      // Send them to the homepage if they are logged in
      this.router.navigate(['../home']);
    })
  }

  iniciarFacebook(){
    this.firebaseService.iniciarSesionFacebook().then((data)=>{
      console.log('success');
      this.router.navigate(['home']);
    })
  }
}
