import { Injectable } from '@angular/core'
import { AngularFirestore } from '@angular/fire/firestore'
import { AngularFireStorage } from '@angular/fire/storage'
import { Observable } from 'rxjs'
import { finalize } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  constructor(
    private _afs: AngularFirestore,
    private _afStorage: AngularFireStorage
  ) {}

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
   * @description get by ibservable
   * @author dbeetoven
   * @date 2018-12-31
   * @param {string} collection
   * @returns
   * @memberof FirestoreService
   */
  public get(collection: string) {
    return this._afs.collection(collection).valueChanges()
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

  public upload(file: File, item) {
    const id = Math.random()
      .toString(36)
      .substring(2)
    const filePath = `tasks/${item.name}_${id}`
    const ref = this._afStorage.ref(filePath)
    this._afStorage.upload(filePath, file)
    const task = this._afStorage.upload(filePath, file)
    let urlImage: any
    task
      .snapshotChanges()
      .pipe(finalize(() => (urlImage = ref.getDownloadURL())))
      .subscribe()
    return urlImage
  }
}
