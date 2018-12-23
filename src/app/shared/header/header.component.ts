import { Component, OnInit } from '@angular/core'
import { AuthentificationService } from 'app/Services/authentification/authentification.service'
@Component({
  selector: 'ms-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(public _authService: AuthentificationService) {}
  ngOnInit() {}
}
