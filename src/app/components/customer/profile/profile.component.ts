import { Component, OnInit } from '@angular/core'
import { AuthentificationService } from 'app/Services/authentification/authentification.service'

@Component({
  selector: 'ms-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  constructor(public _authService: AuthentificationService) {}

  ngOnInit() {}
}
