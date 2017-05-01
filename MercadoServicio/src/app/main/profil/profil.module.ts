import { RouterModule, Routes } from '@angular/router';

import { CargarComponent } from './cargar/cargar.component';
import { CommonModule } from '@angular/common';
import { EditarComponent } from './editar/editar.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ProfilComponent } from './profil.component';

const routes: Routes = [
  {path:'' , component: ProfilComponent}
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProfilComponent,CargarComponent,EditarComponent]
})
export class ProfilModule { }
