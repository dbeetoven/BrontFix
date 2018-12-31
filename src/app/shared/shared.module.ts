import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { SharedRoutingModule } from './shared-routing.module';
import { SidebarmenuComponent } from './sidebarmenu/sidebarmenu.component';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, SidebarmenuComponent, LayoutComponent],
  imports: [CommonModule, SharedRoutingModule],
  exports: [LayoutComponent],
})
export class SharedModule {}
