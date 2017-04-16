import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { LayoutModule } from './layout/layout.module';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path:'',
        component:LayoutComponent,
      }

    ]

  }
];


@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    RouterModule.forChild(routes)
  ],

  declarations: [DashboardComponent]
})
export class DashboardModule { }
