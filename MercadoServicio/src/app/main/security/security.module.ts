import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  { path: '', loadChildren: './login/login.module#LoginModule', pathMatch: 'full' },
  { path: 'password', loadChildren: './password/password.module#PasswordModule' },
  { path: 'registrar', loadChildren: './signin/signin.module#SigninModule' },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class SecurityModule { }
