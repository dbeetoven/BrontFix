import { Component, OnInit } from '@angular/core';

import {Router}from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 public usuario:string;
 public contraseña:string;
  constructor(public router :Router) { }

  ngOnInit() {
    this.router.navigate(['/login']);
  }

}
