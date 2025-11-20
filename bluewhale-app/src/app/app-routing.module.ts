import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.page').then(m => m.LoginPage)
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./pages/register/register.page').then(m => m.RegisterPage)
  },
  // se quiseres manter:
  {
    path: 'settings',
    loadComponent: () =>
      import('./pages/settings/settings.page').then(m => m.SettingsPage)
  },
  {
    path: 'schedule',
    loadComponent: () =>
      import('./pages/schedule/schedule.page').then(m => m.SchedulePage)
  },
  {
    path: 'support',
    loadComponent: () =>
      import('./pages/support/support.page').then(m => m.SupportPage)
  },
  {
    path: 'profile',
    loadComponent: () =>
      import('./pages/profile/profile.page').then(m => m.ProfilePage)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
