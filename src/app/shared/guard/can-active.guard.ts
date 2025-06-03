import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { map, tap } from 'rxjs';

export const canActiveGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);
  return authService.isAuthenticated().pipe(
    tap((response) => console.log(response)),
    map((isAuth) => (isAuth ? true : router.createUrlTree(['/auth'])))
  );
};
