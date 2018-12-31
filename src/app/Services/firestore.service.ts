import { Injectable } from '@angular/core'
import { AngularFirestore } from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  constructor(private _afs: AngularFirestore) {}

  public post(collection: string, data: any) {
    return this._afs.collection(collection).add(data)
  }

  /**
   * @description get objet by id
   * @author dbeetoven
   * @date 2018-12-30
   * @param {string} collection
   * @param {string} documentId
   * @returns
   * @memberof FirestoreService
   */
  public getById(collection: string, documentId: string) {
    return this._afs
      .collection(collection)
      .doc(documentId)
      .snapshotChanges()
  }

  /**
   * @description get all object
   * @author dbeetoven
   * @date 2018-12-30
   * @param {string} collection
   * @returns
   * @memberof FirestoreService
   */
  public getAll(collection: string) {
    return this._afs.collection(collection).snapshotChanges()
  }

  /**
   * @description update object or item
   * @author dbeetoven
   * @date 2018-12-30
   * @param {string} collection
   * @param {string} documentId
   * @param {*} data
   * @returns
   * @memberof FirestoreService
   */
  public put(collection: string, documentId: string, data: any) {
    return this._afs
      .collection(collection)
      .doc(documentId)
      .set(data)
  }

  /**
   * @description delte object
   * @author dbeetoven
   * @date 2018-12-30
   * @param {string} collection
   * @param {string} documentId
   * @returns
   * @memberof FirestoreService
   */
  public delete(collection: string, documentId: string) {
    return this._afs
      .collection(collection)
      .doc(documentId)
      .delete()
  }
}
