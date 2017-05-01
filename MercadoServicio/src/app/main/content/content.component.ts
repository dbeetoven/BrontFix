import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Component, OnInit } from '@angular/core';

import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'ms-content',
  template: `
   <flash-messages></flash-messages>
  <ms-topnav></ms-topnav>
  <router-outlet>
   <flash-messages></flash-messages>
   </router-outlet>
  <flash-messages></flash-messages>
  <ms-footer></ms-footer>
  
  `,
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

constructor(private flashMessagesService: FlashMessagesService){}
 ngOnInit() {

 }
}