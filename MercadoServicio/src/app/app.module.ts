import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselComponent } from './carousel/carousel.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { HttpModule } from '@angular/http';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    CarouselComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
     NgbModule.forRoot()// Bootstrap module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
