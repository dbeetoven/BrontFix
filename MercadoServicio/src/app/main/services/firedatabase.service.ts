
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

import { ContentChildrenDecorator } from '@angular/core/core';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { PromiseObservable } from 'rxjs/observable/PromiseObservable';
import { isSuccess } from '@angular/http/src/http_utils';

@Injectable()
export class FiredatabaseService {
  private servicios: FirebaseListObservable <any[]>;
  private servicio:FirebaseObjectObservable<any[]>;

  constructor(private af:AngularFireDatabase) {}

  getServicios(){
    this.servicios= this.af.list('DataObject/Servicios') as FirebaseListObservable<Servicio[]>;
    console.log(this.servicio);
    console.log("Succes");
    return this.servicio;
  }

  getDetalleServicio(id){
    this.servicio=this.af.object('DataObject/servicios/servivio'+id) as FirebaseObjectObservable<Servicio[]>
    return this.servicios.subscribe(
     servicio =>(console.log(servicio))
    );

  }
   guadarServicio(Servicio){
    this.servicio= this.af.object('DataObject/servicios/servicio') as FirebaseObjectObservable<Servicio[]>
    return this.servicio.set(Servicio).then(()=>
       console.log(Servicio),
    ) ;
 }

}


interface Servicio{
  $key?: String;
  nombre?: String;
  tipo?: String;
  descripcion?: String;
  rating?: String;
  precio?: String;
  fecha?:String;
  vigente?:Boolean;
}
