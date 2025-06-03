import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { delay, Observable, of, throwError } from 'rxjs';
import { selectAccounts } from '../store/selectors';
import { toSignal } from '@angular/core/rxjs-interop';
import { StorageManager } from './storage.service';
import { USER_CACHE_KEY } from '../constants/cache';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private store = inject(Store);
  private sotrage = inject(StorageManager);
  private accounts$ = this.store.select(selectAccounts);
  private accounts = toSignal(this.accounts$);

  login(username: string, password: string) {
    const existingUser = this.accounts()?.find(
      (item) => item.password === password && item.username === username
    );

    console.log('this.accounts()', this.accounts());
    if (!existingUser) {
      return throwError(() => new Error('Invalid username or password'));
    }

    console.log(
      `Logging in with username: ${username} and password: ${password}`
    );
    return of(existingUser).pipe(delay(500));
  }
  register(username: string, password: string): Observable<boolean> {
    console.log(
      `Logging in with username: ${username} and password: ${password}`
    );
    return of(true).pipe(delay(2000));
  }

  logout() {
    return this.sotrage.remove(USER_CACHE_KEY);
  }

  isAuthenticated() {
    return this.store.select((state) => state.global.isAuthenticated);
  }
}
