import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainModule } from "./main/main.module";
import { MainComponent } from "./main/main.component";
// import { AngularFireDatabaseModule } from "angularfire2/database";
// import { AngularFireAuthModule } from "angularfire2/auth";
// import { AngularFireModule } from "angularfire2";

// export const environment = {
//   production: true,
//   firebase: {
//     apiKey: "AIzaSyDC3ijkLJzXTLlTLM3nWmqRsYxusjTVgVc",
//     authDomain: "mercadoservicio-a83f6.firebaseapp.com",
//     databaseURL: "https://mercadoservicio-a83f6.firebaseio.com",
//     projectId: "mercadoservicio-a83f6",
//     storageBucket: "mercadoservicio-a83f6.appspot.com",
//     messagingSenderId: "242315262698"
//   }
// };

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
