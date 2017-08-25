import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'app/main/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from 'app/main/layout/layout.component';



const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: 'servicios', loadChildren: './dashboard/dashboard.module#DashboardModule' },
    ]
  }
];
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LayoutComponent]
})
export class LayoutModule { }
