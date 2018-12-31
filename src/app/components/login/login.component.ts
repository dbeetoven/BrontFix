import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { AuthentificationService } from 'app/Services/authentification/authentification.service'
import { LoggerService } from '@app/utils/logger/logger.service'

@Component({
  selector: 'ms-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginError: string
  public form: FormGroup

  constructor(
    private fb: FormBuilder,
    public _authFService: AuthentificationService,
    private _router: Router,
    private _logger: LoggerService
  ) {
    this.createForm()
  }

  createForm() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
          Validators.minLength(8),
        ],
      ],
    })
  }

  resetForm() {
    this.form.reset()
    this.form.markAsPristine()
    this.form.markAsUntouched()
    this.form.updateValueAndValidity()
  }

  login(model) {
    console.log(model)
    this._authFService
      .login(model)
      .then(res => {
        console.log(res)
        this.resetForm()
      })
      .catch(err => {
        this._logger.error(err)
      })
  }
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
  ngOnInit() {
    this._authFService.logout().then(result => {
      this._logger.warn(`user logout ${result}`)
    })
  }
}
