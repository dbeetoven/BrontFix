import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthentificationService } from './authentification.service';

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
    private _authFService: AuthentificationService,
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
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this._authFService.isAuthenticated()) {
      return true
    }

    this._router.navigate(['/login'])
    return false
  }
}
