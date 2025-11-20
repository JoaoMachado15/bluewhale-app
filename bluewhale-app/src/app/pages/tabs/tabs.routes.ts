import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const TABS_ROUTES: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('../dashboard/dashboard.page').then(m => m.DashboardPage)
      },
      {
        path: 'schedule',
        loadComponent: () =>
          import('./schedule/schedule.page').then(m => m.SchedulePage)
      },
      {
        path: 'support',
        loadComponent: () =>
          import('./support/support.page').then(m => m.SupportPage)
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('./profile/profile.page').then(m => m.ProfilePage)
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }
    ]
  }
];
