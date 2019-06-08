import { NgModule } from '@angular/core'
import { RouterModule, Routes, PreloadAllModules } from '@angular/router'
import { AuthGuard } from './Services/authentification/auth.guard'
import { PreloadstrategyService } from './preloadstrategy.service.'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full',
  },
  {
    path: 'main',
    loadChildren: () => import('./components/main/main.module').then(m => m.MainModule),
    data: { preload: true },
  },
  {
    path: 'login',
    loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule),
    data: { preload: true },
  },
  {
    path: 'servicios',
    loadChildren: () => import('./core/core.module').then(m => m.CoreModule),
    data: { preload: true },
  },
  {
    path: 'contacto',
    loadChildren: () => import('./components/contact/contact.module').then(m => m.ContactModule),
    data: { preload: false },
  },
  {
    path: 'signup',
    loadChildren: () => import('./components/signup/signup.module').then(m => m.SignupModule),
    data: { preload: false },
  },
  {
    path: 'user',
    loadChildren: () => import('./components/customer/customer.module').then(m => m.CustomerModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'not-found',
    loadChildren: () => import('./components/notfound/notfound.module').then(m => m.NotfoundModule),
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadstrategyService,
    }),
  ],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule {}
