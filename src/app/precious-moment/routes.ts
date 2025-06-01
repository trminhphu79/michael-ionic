import { Route } from '@angular/router';

export const routes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./precious-moment.component').then(
        (m) => m.PreciousMomentComponent
      ),
  },
  {
    path: 'detail/:id',
    loadComponent: () =>
      import('./features/precious-moment-list/precious-moment-list.component').then(
        (m) => m.PreciousMomentListComponent
      ),
  },
];
