import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of, switchMap, tap } from 'rxjs';
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
import { StorageManager } from '../services/storage.service';
import { selectAccounts } from './selectors';
import { Store } from '@ngrx/store';
import { toSignal } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';

@Injectable()
export class GlobalEffect {
  private router = inject(Router);
  private actions$ = inject(Actions);
  private authService = inject(AuthService);
  private storageManager = inject(StorageManager);

  loginActions = createEffect(() => {
    return this.actions$.pipe(
      ofType(LOGIN_ACTION_KEY),
      exhaustMap((action) => {
        console.log(LOGIN_ACTION_KEY, action);
        return this.authService.login(action.username, action.password).pipe(
          map((user) => {
            this.router.navigate(['/'])
            return loginSuccess({ user });
          }),
          catchError((error) => {
            alert('failed');
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
            alert('failed');
            console.log('catch error;', error);
            return of(loginFailure({ error }));
          })
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

  fetchStorage = createEffect(() => {
    return this.actions$.pipe(
      ofType(FETCH_STORAGE_KEY),
      switchMap(() => {
        return this.storageManager
          .fetchData()
          .pipe(map((res) => syncDatabaseSuccess({ users: res.users })));
      })
    );
  });
}
