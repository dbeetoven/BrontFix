import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { ContentComponent } from './content/content.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { HomeModule } from './home/home.module';
import { LoginComponent } from './login/login.component';
import { LoginModule } from './login/login.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { NotFoundModule } from './not-found/not-found.module';
import { SharedModule } from './shared/shared.module';
import { SignupModule } from './signup/signup.module';

const routes: Routes = [
 { path: '',
      loadChildren: './home/home.module#HomeModule'
  },
  { path: 'dashboard',
      loadChildren: './dashboard/dashboard.module#DashboardModule' },
  {
    path: 'login',
      loadChildren: './login/login.module#LoginModule'},
  { path: 'signup',
      loadChildren: './signup/signup.module#SignupModule' },
  { path: 'not-found',
      loadChildren: './not-found/not-found.module#NotFoundModule' },
    { path: '**', redirectTo: 'not-found' }
];


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HomeModule,
    DashboardModule,
    LoginModule,
    NotFoundModule,
    SignupModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ContentComponent],
  declarations: [ContentComponent, ]
})
export class MainModule { }
