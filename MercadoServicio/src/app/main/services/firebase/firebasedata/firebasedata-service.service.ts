import { Injectable } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

import { PromiseObservable } from 'rxjs/observable/PromiseObservable';
import { isSuccess } from '@angular/http/src/http_utils';

@Injectable()
export abstract class FirebasedataServiceService {

  abstract listObjectData: FirebaseListObservable<any[]>;
  abstract objectData: FirebaseObjectObservable<any[]>;


  constructor(public database: AngularFireDatabase, public pathUrl: string) {
    this.objectDatabaseConfig(pathUrl);
  }

  /**
   *Crea una instancia con el pathURL
   * @param {string} pathUrl
   *
   * @memberOf FirebasedataServiceService
   */
  private objectDatabaseConfig(pathUrl: string) {
    this.objectData = this.database.object(pathUrl);
    this.listObjectData = this.database.list(pathUrl);

  }

  abstract getAll();
  abstract getById(id);
  abstract update(id, data: any);
  abstract delete();

}


