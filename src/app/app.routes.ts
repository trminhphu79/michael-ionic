import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomePage } from './home/home.page';
import canActiveGuard from './shared/guard/can-active.guard';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [canActiveGuard],
    children: [
      {
        path: '',
        component: HomePage,
      },
      {
        path: 'precious',
        loadChildren: () =>
          import('./precious-moment/routes').then((m) => m.routes),
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
