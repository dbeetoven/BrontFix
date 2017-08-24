import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from 'angularfire2';

import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

import { Router } from '@angular/router';

@Component({
  selector: 'ms-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  f
  constructor(private af: AngularFireAuth, private router: Router) {  }


ngOnInit() {
  }
}
