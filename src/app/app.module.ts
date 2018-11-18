import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from 'environments/environment';
import { MainComponent } from './main/main.component';
import { MainModule } from './main/main.module';
import { AuthentificationService } from './Services/authentification/authentification.service';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    MainModule,
  AngularFireModule.initializeApp(environment.firebase),
  AngularFireDatabaseModule,
  AngularFirestoreModule,
  AngularFireAuthModule
  ],
  providers: [AuthentificationService],
  bootstrap: [MainComponent]
})
export class AppModule { }
