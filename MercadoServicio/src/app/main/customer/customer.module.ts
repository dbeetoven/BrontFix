import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsComponent,InboxComponent,ProfileComponent } from './components';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProfileComponent, SettingsComponent, InboxComponent]
})
export class CustomerModule { }
