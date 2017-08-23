import {Component, OnInit} from '@angular/core';

import { FirebaseService } from '../../../firebase/firebase.service';
import { FlashMessagesService } from 'angular2-flash-messages/module';
import { Observable } from 'rxjs/Observable';
import { Params } from '@angular/router/router';
import { Router } from '@angular/router';
import { Usuario } from '../../interface/usuario';
import { async } from '@angular/core/testing';

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
 public nombre: string;
 public params:any;

  constructor(public firebaseService: FirebaseService,
              private _flashMessagesService: FlashMessagesService,
              private router: Router){
              this.UsuarioAutentificacion();
              }



  ngOnInit() {
     this.UsuarioAutentificacion();
  }
//  Metodos
// Metodos de Auntentificacion de Usuarios

UsuarioAutentificacion(){
  this.firebaseService.loginWithGoogle();
}
//       (auth) => {
//         if (auth == null) {
//           console.log('Not Logged in.');
//           this.router.navigate(['']);
//           this.isLoggedIn = false;
//            console.log('is login ' + this.isLoggedIn);
//           this._flashMessagesService.show('Por favor SingIn!', { cssClass: 'alert-danger', timeout: 3000 });
//     }else {
//           console.log('Successfully Logged in.' + auth.google.email);
//           this._flashMessagesService.show('Bienvenido !' + auth.google.displayName, { cssClass: 'alert-success', timeout: 3000 });
//           this.isLoggedIn = true;
//           this.nombre = auth.google.displayName;
//           this.router.navigate(['']);
//         }
//       }
//     );
//  }
 logout() {
    this.firebaseService.logout();
  }
  // Metodos de Busqueda
  buscar(buscado:HTMLInputElement){
    this.firebaseService.buscar(buscado);
    console.log("Buscado")
    console.log(buscado);
  }
  buscarAll(){
    this.firebaseService.getAllUsuario();

    return console.log('ok');
  }
  // Metodo para añadir nuevo usuario...
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
