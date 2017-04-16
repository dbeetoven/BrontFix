import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ms-content',
  template: `
  
    <ms-topnav></ms-topnav>
  <router-outlet></router-outlet>
  `,
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
items: FirebaseListObservable<any[]>;
  constructor(af: AngularFire) {
    this.items = af.database.list('/items');
    const promise = af.database.object('/item').remove();
promise
  .then(_ => console.log('success'))
  .catch(err => console.log(err, 'You dont have access!'));
  }

  ngOnInit() {
  }

}
// <ms-topnav></ms-topnav>
//     <router-outlet></router-outlet>