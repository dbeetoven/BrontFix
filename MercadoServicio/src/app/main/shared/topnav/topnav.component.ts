import {Component, OnInit} from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Params } from '@angular/router/router';
import { Router } from '@angular/router';
import { customer } from '../../interface/Customer';
import { async } from '@angular/core/testing';


@Component({
  selector: 'ms-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit {

 public isLoggedIn: boolean;
 public nombre: string;
 public params:any;

  constructor(private router: Router){}



  ngOnInit() {
   this. isLoggedIn=true;
  }


  toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('push-right');
  }
  rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
  }

}
