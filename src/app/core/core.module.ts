import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { CoreRoutingModule } from './core-routing.module'
import { TopnavComponent } from './topnav/topnav.component'
import { SidenavComponent } from './sidenav/sidenav.component'
import { CoreComponent } from './core.component'
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatListModule,
} from '@angular/material'

@NgModule({
  declarations: [TopnavComponent, SidenavComponent, CoreComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatListModule,
  ],
})
export class CoreModule {}
