import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { LayoutModule } from './layout/layout.module';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';

const routes: Routes = [
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      {path: '', component: LayoutComponent}

    ]

  }
];


@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],

  declarations: [DashboardComponent]
})
export class DashboardModule { }
