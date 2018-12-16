import { Injectable } from '@angular/core'
import { AngularFireAuth } from '@angular/fire/auth'
import { Router } from '@angular/router'
import { auth } from 'firebase/app'
import { Observable } from 'rxjs'
import { LoggerService } from 'app/utils/logger/logger.service';

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
  private user: Observable<firebase.User>
  private userDetails: firebase.User

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
    private _authFservice: AngularFireAuth,
    private _router: Router,
    private _logger: LoggerService
  ) {
    this.user = _authFservice.authState
    this.user.subscribe(userState => {
      if (userState) {
        this.userDetails = userState
      } else {
        this.userDetails = null
      }
    })
    this._logger.info(this.userDetails)
  }

  /**
   * @description login with google firebase Auth.
   * @author dbeetoven
   * @date 2018-12-16
   * @memberof AuthentificationService
   */
  loginWithGoogle() {
    this._authFservice.auth.signInWithPopup(new auth.GoogleAuthProvider()).then(
      res => {
        this._logger.info(res)
        localStorage.setItem(
          '_userProfile',
          JSON.stringify(res.additionalUserInfo)
        )
        localStorage.setItem('_credential', JSON.stringify(res.credential))
        localStorage.setItem('_user', JSON.stringify(res.user))
      },
      error => {
        this._logger.error(error)
      }
    )
  }

  /**
   * @description logout and then return toa app root.
   * @author dbeetoven
   * @date 2018-12-16
   * @memberof AuthentificationService
   */
  logout() {
    this._authFservice.auth.signOut().then(res => this._router.navigate(['/']))
  }

  /**
   * @description is user authenticated.
   * @author dbeetoven
   * @date 2018-12-16
   * @returns {boolean}
   * @memberof AuthentificationService
   */
  public isAuthenticated(): boolean {
    return !!this._authFservice.authState
  }
}
