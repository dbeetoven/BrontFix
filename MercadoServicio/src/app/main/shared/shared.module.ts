import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from '../home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopnavComponent } from './topnav/topnav.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports : [TopnavComponent,FooterComponent,SidebarComponent,HeaderComponent],
  declarations: [TopnavComponent, FooterComponent, SidebarComponent,HeaderComponent]
})
export class SharedModule { }
