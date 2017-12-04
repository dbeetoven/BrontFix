import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";

import { RouterModule } from "@angular/router";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { TopnavComponent } from "./topnav/topnav.component";

@NgModule({
  imports: [CommonModule, NgbModule.forRoot(), RouterModule],
  exports: [
    TopnavComponent,
    FooterComponent,
    SidebarComponent,
    HeaderComponent
  ],
  declarations: [
    TopnavComponent,
    FooterComponent,
    SidebarComponent,
    HeaderComponent
  ]
})
export class SharedModule {}
