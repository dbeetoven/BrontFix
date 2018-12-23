import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { SharedRoutingModule } from './shared-routing.module'
import { HeaderComponent } from './header/header.component'
import { FooterComponent } from './footer/footer.component'
import { SidebarmenuComponent } from './sidebarmenu/sidebarmenu.component'
import { MaterialModule } from 'app/material';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, SidebarmenuComponent, LayoutComponent],
  imports: [CommonModule, SharedRoutingModule],
  exports: [LayoutComponent],
})
export class SharedModule {}
