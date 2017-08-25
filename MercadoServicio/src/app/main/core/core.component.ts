import { Component, OnInit } from '@angular/core';
import { FirebasedataServiceService } from '../services/firebase/firebasedata/firebasedata-service.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { PromiseObservable } from 'rxjs/observable/PromiseObservable';
import { Router } from '@angular/router';
@Component({
  selector: 'ms-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  //   if (this.router.url === '/') {
  //     this.router.navigate(['/']);
  // }
  }
}
