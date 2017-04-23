import { AngularFire, AuthMethods, AuthProviders, FirebaseListObservable } from 'angularfire2';

import { FirebaseObjectObservable } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class FirebaseService {
  public dbUsuario: FirebaseObjectObservable<any[]>;
  public users: FirebaseListObservable<any>;
  public nombre: string;
  public email: string;
  public password: string;
 
  constructor(public af:AngularFire) {
    this.dbUsuario = this.af.database.object('dbUsuario');
  }
  
  
  /**
   * Logs in the user
   * @returns {firebase.Promise<FirebaseAuthState>}
   */
  loginWithGoogle() {
    return this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup,
    });
  }

/**
 * @param
 * @returns logueo con Twitter
 */
  loginWithTwitter(){
    return this.af.auth.login({
  provider: AuthProviders.Twitter,
  method: AuthMethods.Redirect,
});
  }

/**
 * @returns loguear con correo
 * */ 

loginWithEmail(){
  return this.af.auth.login({
  email: this.email,
  password:this.password,
},
{
  provider: AuthProviders.Password,
  method: AuthMethods.Password,
});
}
/**
 * @param
 * @returns logueo con Twitter
 */
  loginWithGithub(){
    return this.af.auth.login({
  provider: AuthProviders.Github,
  method: AuthMethods.Popup,
  });
  }

  /**
   * Logs out the current user
   */
  logout() {
    return this.af.auth.logout();
  }
}


