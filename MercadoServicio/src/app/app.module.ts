import { AngularFireModule } from 'angularfire2';
import { BrowserModule } from '@angular/platform-browser';
import {ContentComponent} from './main/content/content.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MainModule} from './main/main.module';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

export const firebaseConfig = {
    apiKey: 'AIzaSyDC3ijkLJzXTLlTLM3nWmqRsYxusjTVgVc',
    authDomain: 'mercadoservicio-a83f6.firebaseapp.com',
    databaseURL: 'https://mercadoservicio-a83f6.firebaseio.com',
    projectId: 'mercadoservicio-a83f6',
    storageBucket: 'mercadoservicio-a83f6.appspot.com',
    messagingSenderId: '242315262698'
};


@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MainModule,
   NgbModule.forRoot(),
   AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [ContentComponent]
})
export class AppModule { }
