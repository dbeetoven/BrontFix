import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DescripcionComponent } from './descripcion/descripcion.component';
import { DescripcionModule } from './descripcion/descripcion.module';
import { LayoutComponent } from './layout/layout.component';
import { LayoutModule } from './layout/layout.module';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';

const routes: Routes = [
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      {path: '', component: LayoutComponent},
      {path: 'descripcion/:id', component:DescripcionComponent}

    ]

  }
];


@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    SharedModule,
    DescripcionModule,
    RouterModule.forChild(routes)
  ],

  declarations: [DashboardComponent]
})
export class DashboardModule { }
