import { NgModule } from '@angular/core'
import { RouterModule, Routes, PreloadAllModules } from '@angular/router'
import { AuthGuard } from './Services/authentification/auth.guard'
import { PreloadstrategyService } from './preloadstrategy.service.'

const routes: Routes = [
  {
    path: '',
    loadChildren: './components/main/main.module#MainModule',
    pathMatch: 'full',
    data: { preload: true },
  },
  {
    path: 'login',
    loadChildren: './components/login/login.module#LoginModule',
    data: { preload: true },
  },
  {
    path: 'servicios',
    loadChildren: './core/core.module#CoreModule',
    data: { preload: true },
  },
  {
    path: 'contacto',
    loadChildren: './components/contact/contact.module#ContactModule',
    data: { preload: false },
  },
  {
    path: 'signup',
    loadChildren: './components/signup/signup.module#SignupModule',
    data: { preload: false },
  },
  {
    path: 'user',
    loadChildren: './components/customer/customer.module#CustomerModule',
    canActivate: [AuthGuard],
  },
  {
    path: 'not-found',
    loadChildren: './components/notfound/notfound.module#NotfoundModule',
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
