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
      import(
        './features/precious-moment-detail/precious-moment-detail.component'
      ).then((m) => m.PreciousMomentDetailComponent),
  },
];
