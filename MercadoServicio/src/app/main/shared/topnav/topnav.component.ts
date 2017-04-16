import { Component, OnInit } from '@angular/core';

import { MercadoServicioPage } from '../../../../../e2e/app.po';

@Component({
  selector: 'ms-topnav',
  template: `
<nav class="navbar navbar-toggleable-md fixed-top navbar-light bg-faded">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" 
  aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
  <img class="navbar-brand" src="/assets/images/img/logoTipo.jpg" alt="Mercado Servivios" tyle="margin-left: 0px;">

    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
    <li class="nav-item"><a href="#" class="nav-link">Mercado Servicio</a></li>
      <li class="nav-item active">
        <a class="nav-link" [routerLink]="['']">Home <span class="sr-only">(current)</span></a>
      </li>
       </ul>
      <ul class="navbar-nav d-flex flex-row flex-nowrap ml-auto mr-sm-5 mr-md-5 mr-lg-0"> 
       <li class="nav-item dropdown ">
                <a class="nav-link dropdown-toggle mr-2" id="navbarDropdownMenuLink" 
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                 <img src="" class="img-circle" style="height:25px; width:25px"><span class="caret"></span> Sign In
                </a>
      <div class="dropdown-menu my-2 my-lg-0" aria-labelledby="navbarDropdownMenuLink" align="right">
                    
              <a class="dropdown-item" href="">USER</a>
             <a class="dropdown-item" href="">username</a> 
             <a class="dropdown-item" href="">password</a>
              <a class="dropdown-item" href="">Login</a> 
      </div>
    </li>
    </ul>  
   




  `,
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
