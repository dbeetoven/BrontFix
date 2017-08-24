import { Injectable } from '@angular/core';
import { FirebasedataServiceService } from '../services/firebase/firebasedata/firebasedata-service.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { PromiseObservable } from 'rxjs/observable/PromiseObservable';
import { isSuccess } from '@angular/http/src/http_utils';

@Injectable()
export class HomeServiceService extends FirebasedataServiceService {
  listObjectData: FirebaseListObservable<any[]>;
  objectData: FirebaseObjectObservable<any[]>;


  constructor(database: AngularFireDatabase) {
    const pathUrl = '/dashboard';
    super(database,pathUrl);
  }

  getAll() {
    this.listObjectData = this.database.list(this.pathUrl);
    this.listObjectData.subscribe(
      (response) => {
        console.log(response);
      }, (error) => {
        console.error;
      }
    );
    throw new Error('Method not implemented.');
  }
  getById(id: any) {
    throw new Error('Method not implemented.');
  }
  update(id: any, data: any) {
    throw new Error('Method not implemented.');
  }
  delete() {
    throw new Error('Method not implemented.');
  }



}
