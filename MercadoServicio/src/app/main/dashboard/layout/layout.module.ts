import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    LayoutComponent
  ],
  declarations: [LayoutComponent]
})
export class LayoutModule { }
