import { CanActivateFn } from '@angular/router';

const canActiveGuard = (): CanActivateFn => {
  return (route, state) => {
    return true;
  };
};

export default canActiveGuard;
