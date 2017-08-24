import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthentificationServiceService {
  private user: Observable<firebase.User>;

  constructor(private authentification: AngularFireAuth) {
    this.user = authentification.authState;
  }

  getUserStatus() {
    return this.user;
  }

  // Authentification methods
  loginWihGoogle() {
    return this.authentification.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    return this.authentification.auth.signOut();
  }


}


