import { Observable } from 'rxjs/Observable';
import { AngularFireAuth,AngularFireAuthModule, } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthentificationServiceService {
  private user: Observable<firebase.User>;

  constructor(private authentification: AngularFireAuth) {
    this.user = authentification.authState;
  }



  // Authentification methods
  // loginWihGoogle() {
  //    return this.authentification.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  // }

  signup(email: string, password: string) {
    this.authentification.auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Success!', value);
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });
  }

  login(email: string, password: string) {
    return this.authentification.auth.signInWithEmailAndPassword(email, password);
  }


  getUserStatus() {
    return this.user;
  }

  logout() {
    return this.authentification.auth.signOut();
  }



}


