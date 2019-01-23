import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { AuthentificationService } from '@app/Services/authentification/authentification.service'
import { LoggerService } from '@app/utils/logger/logger.service'
import { FirestoreService } from '@app/Services/firestore.service'

@Component({
  selector: 'ms-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  public loginError: string
  form: FormGroup

  constructor(
    private fb: FormBuilder,
    public _authFService: AuthentificationService,
    private _router: Router,
    private _logger: LoggerService,
    private _firestoreService: FirestoreService
  ) {
    this.createForm()
  }
  createForm() {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      mobile: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(16),
        ],
      ],
      message: ['', [Validators.required]],
    })
  }

  resetForm(formName: FormGroup) {
    formName.reset()
    formName.markAsPristine()
    formName.markAsUntouched()
    formName.updateValueAndValidity()
  }

  /**
   * @description send contact message.
   * @author dbeetoven
   * @date 2018-12-30
   * @param {*} model
   * @memberof ContactComponent
   */
  send(model) {
    this._logger.info(model)
    this._firestoreService
      .post('contact', model)
      .then(res => {
        this._logger.info(`Contact Message Saved: ${res.id}`)
        this.resetForm(this.form)
        this._router.navigate(['/'])
      })
      .catch(err => this._logger.error(err))
  }

  ngOnInit() {}
}
