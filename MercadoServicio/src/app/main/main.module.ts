import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CommonModule } from '@angular/common';
import { ContentComponent } from './content/content.component';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { FormsModule } from '@angular/forms';
import { HomeModule } from './home/home.module';
import { LoadChildren } from '@angular/router/src';
import { LoginModule } from './login/login.module';
import { NotFoundModule } from './not-found/not-found.module';
import { ProfilModule } from './profil/profil.module';
import { SharedModule } from './shared/shared.module';
import { SignupModule } from './signup/signup.module';
import { LayoutModule } from './layout/layout.module';
import { CustomerComponent } from './customer/customer.component';



const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', loadChildren: './home/home.module#HomeModule'},
    {path:'layout',loadChildren:'./layout/layout.module#LayoutModule',pathMatch: 'full'},
    {path: 'profil', loadChildren: './profil/profil.module#ProfilModule', pathMatch: 'full'},
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
    LoginModule,
    NotFoundModule,
    SignupModule,
    ProfilModule,
    FormsModule,
    LayoutModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [],
  exports: [ContentComponent],
  declarations: [ContentComponent, CustomerComponent]
})
export class MainModule { }
