import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  catchError,
  exhaustMap,
  map,
  mergeMap,
  of,
  switchMap,
  tap,
} from 'rxjs';
import {
  FETCH_STORAGE_KEY,
  LOGIN_ACTION_KEY,
  loginFailure,
  loginSuccess,
  LOGOUT_ACTION_KEY,
  logoutSuccess,
  REGISTER_ACTION_KEY,
  syncDatabaseSuccess,
} from './actions';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class GlobalEffect {
  private router = inject(Router);
  private actions$ = inject(Actions);
  private authService = inject(AuthService);

  loginActions = createEffect(() => {
    return this.actions$.pipe(
      ofType(LOGIN_ACTION_KEY),
      exhaustMap((action) => {
        console.log(LOGIN_ACTION_KEY, action);
        return this.authService.login(action.username, action.password).pipe(
          map((user) => {
            this.router.navigate(['/']);
            console.log('Logged success');
            return loginSuccess({ user });
          }),
          catchError((error) => {
            console.log('catch error;', error);
            return of(loginFailure({ error }));
          })
        );
      })
    );
  });

  registerActions = createEffect(() => {
    return this.actions$.pipe(
      ofType(REGISTER_ACTION_KEY),
      exhaustMap((action) => {
        console.log(REGISTER_ACTION_KEY, action);
        return this.authService.register(action.username, action.password).pipe(
          map((user) => loginSuccess({ user })),
          catchError((error) => {
            alert('Login failed');
            return of(loginFailure({ error }));
          })
        );
      })
    );
  });

  logOutActions = createEffect(() => {
    return this.actions$.pipe(
      ofType(LOGOUT_ACTION_KEY),
      mergeMap(() => {
        return this.authService.logout();
      }),
      map(() => {
        return logoutSuccess({ ok: true });
      }),
      tap(() => {
        console.log('Loggout success');
        this.router.navigateByUrl('/auth');
      })
    );
  });

  fetchStorage = createEffect(() => {
    return this.actions$.pipe(
      ofType(FETCH_STORAGE_KEY),
      switchMap((response) => {
        return of(syncDatabaseSuccess(response));
      })
    );
  });
}
