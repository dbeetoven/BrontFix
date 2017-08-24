import { Component, OnInit } from '@angular/core';

import { AuthentificationServiceService} from '../services/firebase/firebase-authentification/authentification-service.service';
import { Router } from '@angular/router';
import { firebaseConfig } from '../../app.module';

@Component({
  selector: 'ms-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private user;
  private userdata;
constructor(private authenticate: AuthentificationServiceService,
            private router: Router) {

}

authWithGoogle(){
  this.authenticate.loginWihGoogle().then(
    (response) => {
      this.userdata = response.data;
      this.router.navigate(['home']);
      console.dir(response);
    },
    (error) => {
      console.dir('ocurrio un error, verifique sus datos ',error);
    }
  );
}





  ngOnInit(): void {
    console.dir(this.user,':::',this.userdata)
  }
}
