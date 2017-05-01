import {Component, OnInit} from '@angular/core';

import { FirebaseService } from '../../../firebase/firebase.service';
import { FlashMessagesService } from 'angular2-flash-messages/module';
import { Observable } from 'rxjs/Observable';
import { Params } from '@angular/router/router';
import { Router } from '@angular/router';

@Component({
  selector: 'ms-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
/** 
 * @method login
 * @method logout
 * @method buscar
 * @function firebase(auth:type) {
   firebase.auth;
   firebase.metodo.buscar
 }
*/
export class TopnavComponent implements OnInit {

 public isLoggedIn: boolean;
 public name: string;
 public params:any;

  constructor(public firebaseService: FirebaseService,
              private _flashMessagesService: FlashMessagesService,
              private router: Router) 
    { this.firebaseService.af.auth.subscribe(
      (auth) => {
        if (auth == null) {
          console.log('Not Logged in.');
          this.router.navigate(['']);
          this.isLoggedIn = false;
           console.log('is login ' + this.isLoggedIn);
          this._flashMessagesService.show('Por favor logueate !', { cssClass: 'alert-danger', timeout: 3000 });
    }else {
          console.log('Successfully Logged in.' + auth.google.email);
          this._flashMessagesService.show('Welcome !' + auth.google.displayName, { cssClass: 'alert-success', timeout: 3000 });
          this.isLoggedIn = true;
          this.name = auth.google.displayName;
          this.router.navigate(['']);
        }
      }
    );
  }

  logout() {
    this.firebaseService.logout();
  }

  ngOnInit() {}

  buscar(params){
    this.firebaseService.buscar(params);

   console.log("Busqueda del paremetro que pasaron : " + this.params);
   console.log(this.params);
  }
  buscarAll(){
    this.firebaseService.getAllUsuario()
    return console.log("ya esta...");
  }
  add(params){
    this.firebaseService.guadarUsuario(params);
    console.log(this.params);
  }
  toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('push-right');
    }
    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }



}
