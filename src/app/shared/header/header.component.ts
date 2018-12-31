import { Component, OnInit } from '@angular/core'
import { AuthentificationService } from 'app/Services/authentification/authentification.service'
import { LoggerService } from '@app/utils/logger/logger.service'
import { Router } from '@angular/router'
@Component({
  selector: 'ms-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(
    public _authService: AuthentificationService,
    private _logger: LoggerService,
    private _router: Router
  ) {}

  public closeSession() {
    this._authService.logout().then(result => {
      this._router.navigate(['/'])
      this._logger.warn(`User loggout ${result}`)
    })
  }
  ngOnInit() {}
}
