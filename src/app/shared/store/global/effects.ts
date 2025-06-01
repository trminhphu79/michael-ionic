import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import {
  LOGIN_ACTION_KEY,
  loginFailure,
  loginSuccess,
  LOGOUT_ACTION_KEY,
  logoutSuccess,
} from './actions';

@Injectable()
export class GlobalEffect {
  private actions$ = inject(Actions);
  private authService = inject(AuthService);

  loginActions = createEffect(() => {
    return this.actions$.pipe(
      ofType(LOGIN_ACTION_KEY),
      exhaustMap((action) => {
        return this.authService.login(action.username, action.password).pipe(
          map((user) => loginSuccess({ user })),
          catchError((error) => of(loginFailure({ error })))
        );
      })
    );
  });

  logOutActions = createEffect(() => {
    return this.actions$.pipe(
      ofType(LOGOUT_ACTION_KEY),
      map(() => {
        this.authService.logout();
        return logoutSuccess({ ok: true });
      })
    );
  });
}
