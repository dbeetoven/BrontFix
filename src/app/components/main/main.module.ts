import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { SharedModule } from 'app/shared/shared.module';
import { NgbCarousel, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    SharedModule,
    NgbModule,
    MainRoutingModule
  ]
})
export class MainModule { }
