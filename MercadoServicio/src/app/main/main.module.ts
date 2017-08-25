import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes, LoadChildren } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content/content.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';



const routes: Routes = [
  { path: '', loadChildren: './core/core.module#CoreModule',pathMatch: 'full'},
  { path: 'detalle', loadChildren: './layout/layout.module#LayoutModule' },
  { path: 'cliente', loadChildren: './customer/customer.module#CustomerModule' },
  { path: 'login', loadChildren: './security/security.module#SecurityModule' },
  { path: 'error', loadChildren: './not-found/not-found.module#NotFoundModule' },
  { path: '**', redirectTo: 'not-found', }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [],
  exports: [ContentComponent],
  declarations: [ContentComponent]
})
export class MainModule { }
