import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

import { FirebaseObjectObservable } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Params } from '@angular/router';

import * as firebase from 'firebase/app';
@Injectable()
export class FirebaseService {
  public usuario: FirebaseObjectObservable<any[]>;
  public usuarios: FirebaseListObservable<any>;
  public nombre: string;
  public email: string;
  public password: string;
  public id:any;

  constructor(public af: AngularFireDatabase, public afAuth: AngularFireAuth) {
    const servicios$: FirebaseListObservable <any> = af.list('DataObject/Usuarios');

          servicios$.subscribe(
            val => console.log(val)
          );

  }

  /**
   * Logs in the user
   * @returns {firebase.Promise<FirebaseAuthState>}
   *
   */

  loginWithGoogle() {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  iniciarSesionFacebook(){
      return this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }
/**
 * @param
 * @returns logueo con Twitter
 */
  loginWithTwitter(){
    return this.afAuth.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider());
  }

/**
 * @returns loguear con correo
 * */

loginWithEmail(){
//   return this.afAuth.auth.login({
//   email: this.email,
//   password:this.password,
// },
// {
//   provider: AuthProviders.Password,
//   method: AuthMethods.Password,
// });
}
/**
 * @param
 * @returns logueo con Twitter
 */
  loginWithGithub(){
  //   return this.afAuth.auth.login({
  // provider: AuthProviders.Github,
  // method: AuthMethods.Popup,
  // });
  }

  /**
   * @method logout()
   * @param firebase User
   */
  logout() {
    return this.afAuth.auth.signOut();
  }

  /**
   * @method buscar()
   */

  guadarUsuario(Usuario){
     this.usuario = this.af.object('DataObject/Usuarios/' + Usuario.nombre) as FirebaseObjectObservable<Usuario[]>
     return this.usuario.set(Usuario).then(() =>
       console.log(Usuario),
    ) ;

   }

  buscar(usuario){
    this.usuario = this.af.object('DataObject/Usuarios' + usuario.nombre) as FirebaseObjectObservable<Usuario[]>
    this.usuario.subscribe(usuario => {
        console.log(usuario);
        return usuario;
      });
    console.log(this.usuario);
    return this.usuario;
  }

  getAllUsuario(){
  this.usuarios = this.af.list('DataObject/Usuarios')as FirebaseListObservable<any>
  console.log("Metodo de busqueda")
  this.usuarios.subscribe(
  val => console.log(val));
  console.log(this.usuarios);
  return this.usuarios;
}

// exports.touch = functions.database.ref('DataObject/Usuarios').onWrite(
//     event => admin.database().ref('/lastmodified').set(event.timestamp));
}

// Interface Datos  Usuario
interface Usuario{
  $key?: string;
  nombre?: string;
  apellido?: string;
  direccion?: {
        calle?: string; // required
        codigoPostal?: string;
        numero?: number;
    }
  fechaNacimiento?: Date;
  correos?: string[];
  profesiones?: string[];
  Telefono?: {
      casa?: {numero?: number; }
       mobil?: {numero?: number; }
        oficina?: {numero?: number; }
  }
  tipo?: string;
  descripcion?: string;
  rating?: string;
  vigente?: boolean;
  fechaServivios?: any[];
  fechaDeAlta?: Date;
  fechaDeBaja?: Date;
  Servicios?: any[];


}


