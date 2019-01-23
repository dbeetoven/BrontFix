import { Injectable } from '@angular/core'
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router'
import { Observable } from 'rxjs'
import { map, take, tap } from 'rxjs/operators'
import { AuthentificationService } from './authentification.service'

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  /**
   *Creates an instance of AuthGuard.
   * @author dbeetoven
   * @date 2018-12-16
   * @param {AuthentificationService} _authFService
   * @param {Router} _router
   * @memberof AuthGuard
   */
  constructor(
    private _authService: AuthentificationService,
    private _router: Router
  ) {}

  /**
   * @description is user authenticated to go to current root page.
   * @author dbeetoven
   * @date 2018-12-16
   * @param {ActivatedRouteSnapshot} next
   * @param {RouterStateSnapshot} state
   * @returns {(Observable<boolean> | Promise<boolean> | boolean)}
   * @memberof AuthGuard
   */
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this._authService.user.pipe(
      take(1),
      map(user => !!user),
      tap(loggedIn => {
        if (!loggedIn) {
          console.log('access denied')
          this._router.navigate(['/login'])
        }
      })
    )
  }
}
