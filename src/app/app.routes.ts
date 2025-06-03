import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomePage } from './home/home.page';
import { canActiveGuard } from './shared/guard/can-active.guard';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: HomePage,
        canActivate: [canActiveGuard],
      },
      {
        path: 'precious',
        canMatch: [canActiveGuard],
        loadChildren: () =>
          import('./precious-moment/routes').then((m) => m.routes),
      },
      {
        path: 'settings',
        loadComponent: () =>
          import('./settings/settings.component').then(
            (c) => c.SettingsComponent
          ),
      },
    ],
  },
  {
    path: 'auth',
    pathMatch: 'full',
    loadChildren() {
      return import('./auth/routes').then((r) => r.routes);
    },
  },
];
