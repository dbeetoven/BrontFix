import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { ContentComponent } from './content/content.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { FiredatabaseService } from './servicios/firedatabase.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { FormsModule } from '@angular/forms';
import { HomeModule } from './home/home.module';
import { LoadChildren } from '@angular/router/src';
import { LoginModule } from './login/login.module';
import { NotFoundModule } from './not-found/not-found.module';
import { ProfilModule } from './profil/profil.module';
import { SharedModule } from './shared/shared.module';
import { SignupModule } from './signup/signup.module';

const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', loadChildren: './home/home.module#HomeModule'},
    {path: 'profil', loadChildren: './profil/profil.module#ProfilModule', pathMatch: 'full'},
    {path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule', pathMatch: 'full'},
    {path: 'login', loadChildren: './login/login.module#LoginModule'},
    {path: 'signup', loadChildren: './signup/signup.module#SignupModule'},
    {path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule'},
    {path: '#', redirectTo: 'home', pathMatch: 'full'},
    {path: '**', redirectTo: 'not-found', pathMatch: 'full'}
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
    FlashMessagesModule,
    ProfilModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [FiredatabaseService],
  exports: [ContentComponent],
  declarations: [ContentComponent]
})
export class MainModule { }
