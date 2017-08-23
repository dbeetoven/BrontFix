import { Component, OnInit } from '@angular/core';

import { FirebaseService } from '../../../firebase/firebase.service';
import { FormGroup } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'ms-cargar',
  templateUrl: './cargar.component.html',
  styleUrls: ['./cargar.component.scss']
})
export class CargarComponent implements OnInit {
  id:any;
  nombre= "Lionel Messi ";
  apellido= "LeoBarcelona";
  calle= "Belgrano"
  numero=1234;
  fechaNacimiento= 13031992;
  correo="juanpedro@mailto.com";
  profesion="copypasteur";
  telefono=1122345689;
  tipo= "free lancer";
  codigopostal=1092;

  public submitted: boolean;
  constructor(private service:FirebaseService,
              private router:Router) { }

  ngOnInit() {
  }

OnSubmit(){
  
  let usuario={
   nombre: this.nombre,
    tipo: this.tipo,
    direccion:{
      calle: this.calle,
      cogigopostal:this.codigopostal,
    numero:this.numero},
    correos: this.correo,
  profesiones:this.profesion,
  
}
 this.service.guadarUsuario(usuario);
  console.log(usuario);

  // this.router.navigate(['dashboard']);
}

}
