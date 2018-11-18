import { Injectable } from "@angular/core";
import * as firebase from "firebase";
import { AngularFireAuth } from "angularfire2/auth";

@Injectable({
  providedIn: "root"
})
export class AuthentificationService {
  constructor(private authService: AngularFireAuth) {}

  loginWithGoogle() {
    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(function() {
        const provider = new firebase.auth.GoogleAuthProvider();
        // In memory persistence will be applied to the signed in Google user
        // even though the persistence was set to 'none' and a page redirect
        // occurred.
        return firebase.auth().signInWithPopup(provider);
      })
      .catch(function(error) {
        // Handle Errors here.
        console.log(error);
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  onFBLogin() {
    // this.authService.authState .loginWithFB();
  }
  public isAuthenticated(): boolean {
    return true;
  }
  // return new Promise<any>((resolve, reject) => {
  //   let provider = new firebase.auth.GoogleAuthProvider();
  //   provider.addScope('profile');
  //   provider.addScope('email');
  //   this.afAuth.auth
  //   .signInWithPopup(provider)
  //   .then(res => {
  //     resolve(res);
  //   })
  // })
}
