import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'environments/environment';
import { AppRoutingModule } from './App-rooting.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './Services/authentification/auth.guard';
import { AuthentificationService } from './Services/authentification/authentification.service';
import { SharedModule } from './shared/shared.module';
import { LoggerService } from './utils/logger/logger.service';
import { ConsoleLoggerService } from './utils/logger/console-logger.service';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
  ],
  providers: [
    AuthentificationService,
    AuthGuard,
    { provide: LoggerService, useClass: ConsoleLoggerService },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
