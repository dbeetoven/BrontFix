import { Component, OnInit } from '@angular/core';
import { AuthentificationServiceService } from '../../services/firebase/firebase-authentification/authentification-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ms-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers:[AuthentificationServiceService]
})
export class LoginComponent implements OnInit {


   email: string;
   password: string;

constructor(private authenticate: AuthentificationServiceService,
            private router: Router) {

}


login(email,password){
  this.authenticate.login(this.email, this.password);
}


  ngOnInit() {
  }

}
