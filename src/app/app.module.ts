import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainModule } from "./main/main.module";
import { MainComponent } from "./main/main.component";

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    MainModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
