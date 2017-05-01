import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ms-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {
  cargarPerfil:boolean;
  editarPerfil:boolean;
  constructor() {
    this.cargarPerfil=true;
    this.editarPerfil=false;
   }

  ngOnInit() {
  }

}
