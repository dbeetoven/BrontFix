import { AngularFire, AuthMethods, AuthProviders, FirebaseListObservable } from 'angularfire2';

import { FirebaseObjectObservable } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Params } from '@angular/router';

@Injectable()
export class FirebaseService {
  public usuario: FirebaseObjectObservable<any[]>;
  public usuarios: FirebaseListObservable<any>;
  public nombre: string;
  public email: string;
  public password: string;
  public id:any;

  constructor(public af:AngularFire) {
    const servicios$: FirebaseListObservable <any> = af.database.list('messages');

          servicios$.subscribe(
            val => console.log(val)
          );
  
  }
  
  
  /**
   * Logs in the user
   * @returns {firebase.Promise<FirebaseAuthState>}
   */
  loginWithGoogle() {
    return this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup,
    });
  }

/**
 * @param
 * @returns logueo con Twitter
 */
  loginWithTwitter(){
    return this.af.auth.login({
  provider: AuthProviders.Twitter,
  method: AuthMethods.Redirect,
});
  }

/**
 * @returns loguear con correo
 * */ 

loginWithEmail(){
  return this.af.auth.login({
  email: this.email,
  password:this.password,
},
{
  provider: AuthProviders.Password,
  method: AuthMethods.Password,
});
}
/**
 * @param
 * @returns logueo con Twitter
 */
  loginWithGithub(){
    return this.af.auth.login({
  provider: AuthProviders.Github,
  method: AuthMethods.Popup,
  });
  }

  /**
   * @method logout()
   * @param firebase User
   */
  logout() {
    return this.af.auth.logout();
  }

  /**
   * @method buscar()
   */

  guadarUsuario(Usuario){
     this.usuario= this.af.database.object('DataObject/Usuarios/'+Usuario.nombre) as FirebaseObjectObservable<Usuario[]>
     return this.usuario.set(Usuario).then(()=>
       console.log(Usuario),
    ) ;

   }

  buscar(usuario){
    this.usuario= this.af.database.object('DataObject/Usuarios') as FirebaseObjectObservable<Usuario>
    console.log(this.usuario);
    return this.usuario;
  }

  getAllUsuario(){
  this.usuarios=this.af.database.list('DataObject/Usuarios')as FirebaseListObservable<Usuario[]>
  console.log(this.usuarios);
  return this.usuarios;
  }
}

// Interface Datos  Usuario
interface Usuario{
  $key?: String;
  nombre?: String;
  apellido?: String;
  direccion?: {
        calle?: string; // required
        codigoPostal?: string;
        numero?:number;
    }
  fechaNacimiento?: Date;
  correos?: String[];
  profesiones?: String[];
  Telefono?:{
      casa?:{numero?:number;}
       mobil?:{numero?:number;}
        oficina?:{numero?:number;}
  }
  tipo?: String;
  descripcion?: String;
  rating?: String;
  vigente?: Boolean;
  fechaServivios?:any[];
  fechaDeAlta?:Date;
  fechaDeBaja?: Date;
  Servicios?: any[];


}


