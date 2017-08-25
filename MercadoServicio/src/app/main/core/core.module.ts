import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { CarouselComponent, ArticlesComponent,NotificationComponent} from './components';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '', component: CoreComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    NgbCarouselModule.forRoot(),
    NgbAlertModule.forRoot(),
    RouterModule.forChild(routes)
  ],
  declarations: [CoreComponent, CarouselComponent, ArticlesComponent, NotificationComponent]
})
export class CoreModule { }
