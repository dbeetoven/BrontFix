import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'carousel', component: CarouselComponent },
  { path: 'header', component: HeaderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule { }
