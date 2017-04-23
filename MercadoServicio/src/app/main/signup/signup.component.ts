import { Component, OnInit } from '@angular/core';

import { AngularFire } from 'angularfire2';
import { EmailPasswordCredentials } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'ms-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  f
  constructor(private af: AngularFire, private router: Router) {  }

  onSubmit(event, name, password) {
      console.log(name);
      this.af.auth.createUser({
        email: name,
        password: password
      }).then(
        (success) => {
        console.log(success);
        this.router.navigate(['../home'])
      }).catch(
        (err) => {
        console.log(err);
        this.router.navigate(['../not-found']);
      })
    }

ngOnInit() {
  }
}
