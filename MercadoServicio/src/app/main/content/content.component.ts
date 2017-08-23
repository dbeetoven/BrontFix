import { AfterViewInit, Component, OnInit } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


import { FlashMessagesService } from 'angular2-flash-messages';
import { firebaseConfig } from '../../app.module';

@Component({
  selector: 'ms-content',
  template: `
  <ms-topnav></ms-topnav>
  <flash-messages></flash-messages>
  <router-outlet></router-outlet>
  <ms-footer></ms-footer>

  `,
  styleUrls: ['./content.component.scss'],
})

export class ContentComponent implements OnInit,AfterViewInit {


      constructor(private flashMessagesService: FlashMessagesService,){
            }
 ngOnInit() {
 }
 ngAfterViewInit() {
  }

}


