import { Component, OnInit } from '@angular/core'
import { AuthentificationService } from 'app/Services/authentification/authentification.service'
import { Router } from '@angular/router'

@Component({
  selector: 'ms-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    public _authFService: AuthentificationService,
    private _router: Router
  ) {}

  googleLogin() {
    this._authFService
      .loginWithGoogle()
      .then(user => {
        console.log(user)
        this._router.navigate(['/'])
      })
      .catch(error => {
        console.error(error)
      })
  }
  ngOnInit() {}
}
