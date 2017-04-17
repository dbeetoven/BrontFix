import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    { path: '', component: LoginComponent }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [],
  declarations: [LoginComponent]
})
export class LoginModule { }
