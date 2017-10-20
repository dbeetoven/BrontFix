import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { BrowserModule } from '@angular/platform-browser';
import { ContentComponent } from './main/content/content.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MainModule } from './main/main.module';
import { MainComponent } from './main/main.component';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

import * as firebase from 'firebase/app';


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
    Angular2FontawesomeModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
