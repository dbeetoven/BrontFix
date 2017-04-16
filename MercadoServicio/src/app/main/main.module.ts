import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { ContentComponent } from './content/content.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';

const routes: Routes =[
 { path: '',
      loadChildren: './home/home.module#HomeModule'
  },
  { path: 'dashboard',
      loadChildren: './dashboard/Dashboard.module#DashboardModule' }
]


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HomeModule,
    DashboardModule,
    RouterModule.forRoot(routes)
  ],
  exports:[ContentComponent],
  declarations: [ContentComponent, ]
})
export class MainModule { }
