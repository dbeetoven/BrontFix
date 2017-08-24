import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'app/main/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from 'app/main/layout/layout.component';
import { DashboardModule } from 'app/main/layout/dashboard/dashboard.module';


const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
    ]
  }
];
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DashboardModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LayoutComponent]
})
export class LayoutModule { }
