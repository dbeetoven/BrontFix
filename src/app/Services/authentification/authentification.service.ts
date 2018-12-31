import { Injectable } from '@angular/core'
import { AngularFireAuth } from '@angular/fire/auth'
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore'
import { Router } from '@angular/router'
import { User } from '@app/classes/mappers/user'
import { LoggerService } from '@app/utils/logger/logger.service'
import { auth } from 'firebase/app'
import { Observable, of } from 'rxjs'
import { switchMap } from 'rxjs/operators'

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
  }

  /**
   * @description crete new user with email & password
   * @author dbeetoven
   * @date 2018-12-30
   * @param {*} value
   * @returns
   * @memberof AuthentificationService
   */
  signUp(value) {
    return new Promise<any>((resolve, reject) => {
      this._afAuth.auth
        .createUserWithEmailAndPassword(value.email, value.password)
        .then(
          res => {
            resolve(res)
          },
          err => reject(err)
        )
    })
  }

  /**
   * @description login with email& password
   * @author dbeetoven
   * @date 2018-12-30
   * @param {*} value
   * @returns
   * @memberof AuthentificationService
   */
  login(value) {
    return new Promise<any>((resolve, reject) => {
      this._afAuth.auth
        .signInWithEmailAndPassword(value.email, value.password)
        .then(
          credential => {
            this.updateUserData(credential.user).then(user => {
              this._logger.info(user)
              resolve(user)
            })
            // resolve(res)
          },
          err => reject(err)
        )
    })
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
      this.updateUserData(credential.user)
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
    const userRef: AngularFirestoreDocument<User> = this._afs.doc(
      `users/${user.uid}`
    )

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
  public async logout() {
    return await this._afAuth.auth.signOut()
  }
}
