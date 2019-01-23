import { Injectable } from '@angular/core'
import { LoggerService } from '@app/utils/logger/logger.service'
import { Router } from '@angular/router'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { environment } from '@env/environment'
import { switchMap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  /**
   *Creates an instance of AuthService.
   * @author dbeetoven
   * @date 2019-01-20
   * @param {HttpClient} _http
   * @param {Router} _router
   * @param {LoggerService} _logger
   * @memberof AuthService
   */
  constructor(
    private _http: HttpClient,
    private _router: Router,
    private _logger: LoggerService
  ) {}

  public login(credencial: any): Promise<any> {
    return this._http.post(`${environment.endpoint}/api/auth/login`, credencial).toPromise()
  }

//   login(username: string, password: string) {
//     return this.http.post<any>(`/users/authenticate`, { username: username, password: password })
//         .pipe(map(user => {
//             // login successful if there's a jwt token in the response
//             if (user && user.token) {
//                 // store user details and jwt token in local storage to keep user logged in between page refreshes
//                 localStorage.setItem('currentUser', JSON.stringify(user));
//             }

//             return user;
//         }));
// }

logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
}
}
