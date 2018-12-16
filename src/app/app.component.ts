import { Component, OnInit } from '@angular/core'
import { AuthentificationService } from './Services/authentification/authentification.service'
import { LoggerService } from './utils/logger/logger.service'

@Component({
  selector: 'ms-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    public _authFService: AuthentificationService,
    private _logger: LoggerService
  ) {
    if (this._authFService.isAuthenticated()) {
      this._logger.info('usuario loggeado.')
    } else {
      this._logger.info('Usuaior logout.')
    }
  }

  ngOnInit() {}
}
