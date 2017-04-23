import {Component, OnInit} from '@angular/core';

import { FirebaseService } from '../../../firebase/firebase.service';
import { FlashMessagesService } from "angular2-flash-messages/module";
import { Router } from '@angular/router';

@Component({
  selector: 'ms-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit {

 public isLoggedIn:boolean;
  constructor(public firebaseService: FirebaseService,
              private _flashMessagesService: FlashMessagesService,
              private router: Router) {


    this.firebaseService.af.auth.subscribe(
      (auth) => {
        if(auth == null) {
          console.log('Not Logged in.');
          this.router.navigate(['']);
          this.isLoggedIn = false;
           console.log('is login '+this.isLoggedIn);
          this._flashMessagesService.show('Por favor logueate !', { cssClass: 'alert-danger', timeout: 3000 });
    }else {
          console.log('Successfully Logged in.');
          console.log('Successfully Logged in.' + auth.google.email);
          this._flashMessagesService.show('Welcome !'+auth.google.displayName, { cssClass: 'alert-success', timeout: 3000 });
          this.isLoggedIn = true;
          console.log('is login '+this.isLoggedIn);
          this.firebaseService.email = auth.google.email;
          this.router.navigate(['/home']);
        }
      }
    );
  }

  logout() {
    this.firebaseService.logout();
  }

  ngOnInit() {}
  toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('push-right');
    }
    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }

}
