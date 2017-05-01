import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
  }
];
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    LayoutComponent
  ],
  declarations: [LayoutComponent]
})
export class LayoutModule { }
