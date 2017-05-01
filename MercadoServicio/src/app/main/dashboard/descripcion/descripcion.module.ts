import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core/core';
import { DescripcionComponent } from './descripcion.component';
import { NgModule } from '@angular/core';

const routes : Routes = [
  {path: '', component: DescripcionComponent}
];


@NgModule({
  imports: [
    CommonModule,
      RouterModule.forChild(routes)
  ],
  declarations: [DescripcionComponent]
})
export class DescripcionModule { }
