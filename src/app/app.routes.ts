import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadComponent() {
          return import('./home/home.page').then((m) => m.HomePage);
        },
      },
      {
        path: 'precious',
        loadChildren: () =>
          import('./precious-moment/routes').then((m) => m.routes),
      },
    ],
  },
];
