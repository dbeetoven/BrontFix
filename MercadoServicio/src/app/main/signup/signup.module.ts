import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SignupComponent } from './signup.component';

const routes: Routes = [
    { path: '', component: SignupComponent }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SignupComponent]
})
export class SignupModule { }
