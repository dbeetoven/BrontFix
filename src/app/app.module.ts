import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'environments/environment';
import { AppRoutingModule } from './App-rooting.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material';
import { AuthGuard } from './Services/authentification/auth.guard';
import { AuthentificationService } from './Services/authentification/authentification.service';
import { SharedModule } from './shared/shared.module';
import { ConsoleLoggerService } from './utils/logger/console-logger.service';
import { LoggerService } from './utils/logger/logger.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    ReactiveFormsModule
  ],
  providers: [
    AuthentificationService,
    AuthGuard,
    { provide: LoggerService, useClass: ConsoleLoggerService },
  ],
  schemas: [NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
