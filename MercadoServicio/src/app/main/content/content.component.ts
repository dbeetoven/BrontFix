import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Component, OnInit } from '@angular/core';

import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'ms-content',
  template: `
  
    <ms-topnav></ms-topnav>
    
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <flash-messages></flash-messages>
  <router-outlet></router-outlet>
  `,
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

constructor(private flashMessagesService: FlashMessagesService){}
 ngOnInit() {
   //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
   //Add 'implements OnInit' to the class.
 }
}