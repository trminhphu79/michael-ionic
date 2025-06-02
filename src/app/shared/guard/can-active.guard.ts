import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

const canActiveGuard = (): CanActivateFn => {
  const router = inject(Router);
  return (route, state) => {
    console.log('gehe');
    return router.createUrlTree(['/auth']);
  };
};

export default canActiveGuard;
