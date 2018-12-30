import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { User } from 'app/classes/mappers/user';
import { LoggerService } from 'app/utils/logger/logger.service';
import { auth } from 'firebase';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

/**
 * @description Authentification service class.
 * @author dbeetoven
 * @date 2018-12-16
 * @export
 * @class AuthentificationService
 */
@Injectable({
  providedIn: 'root',
})
export class AuthentificationService {
  public user: Observable<User>
  public authState: any
  private isAuth: boolean

  /**
   *Creates an instance of AuthentificationService.
   * @author dbeetoven
   * @date 2018-12-16
   * @param {AngularFireAuth} _authFservice
   * @param {Router} _router
   * @param {LoggerService} _logger
   * @memberof AuthentificationService
   */
  constructor(
    private _afAuth: AngularFireAuth,
    private _afs: AngularFirestore,
    private _router: Router,
    private _logger: LoggerService
  ) {
    // Get auth data, then get firestore user document || null
    this.user = this._afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this._afs.doc<User>(`users/${user.uid}`).valueChanges()
        } else {
          return of(null)
        }
      })
    )
    this._logger.info(this.user);
  }

  /**
   * @description login with google firebase Auth.
   * @author dbeetoven
   * @date 2018-12-16
   * @memberof AuthentificationService
   */
  loginWithGoogle() {
    const provider = new auth.GoogleAuthProvider()
    return this.oAuthLogin(provider)
  }

  /**
   * @description is user authenticated.
   * @author dbeetoven
   * @date 2018-12-16
   * @returns {boolean}
   * @memberof AuthentificationService
   */
  public isAuthenticated(): boolean {
    return this.isAuth
  }

  /**
   * @description authentifaction providers
   * @author dbeetoven
   * @date 2018-12-23
   * @private
   * @param {*} provider
   * @returns
   * @memberof AuthentificationService
   */
  private oAuthLogin(provider) {
    return this._afAuth.auth.signInWithPopup(provider).then(credential => {
      return this.updateUserData(credential.user)
    })
  }

  /**
   * @description udapte uer data from firestrom.
   * @author dbeetoven
   * @date 2018-12-23
   * @private
   * @param {*} user
   * @returns
   * @memberof AuthentificationService
   */
  private updateUserData(user) {
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<User> = this._afs.doc(`users/${user.uid}`)

    const data: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
    }

    return userRef.set(data, { merge: true })
  }
  /**
   * @description logout and then return toa app root.
   * @author dbeetoven
   * @date 2018-12-16
   * @memberof AuthentificationService
   */
  logout() {
    this._afAuth.auth.signOut().then(res => this._router.navigate(['/']))
  }
}
