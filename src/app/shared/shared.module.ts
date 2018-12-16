import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { SharedRoutingModule } from './shared-routing.module'
import { HeaderComponent } from './header/header.component'
import { FooterComponent } from './footer/footer.component'
import { SidebarmenuComponent } from './sidebarmenu/sidebarmenu.component'

@NgModule({
  declarations: [HeaderComponent, FooterComponent, SidebarmenuComponent],
  imports: [CommonModule, SharedRoutingModule],
  exports: [HeaderComponent, FooterComponent, SidebarmenuComponent],
})
export class SharedModule {}
