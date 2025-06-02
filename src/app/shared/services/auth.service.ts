import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { delay, Observable, of, throwError } from 'rxjs';
import { selectAccounts } from '../store/selectors';
import { toSignal } from '@angular/core/rxjs-interop';
import { User } from '../models/user';
import { HttpErrorResponse } from '@angular/common/module.d-CnjH8Dlt';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private store = inject(Store);
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

  logout(): void {
    console.log('Logging out');
  }

  isAuthenticated(): boolean {
    // Simulate an authentication check
    return true; // In a real application, you would check the authentication status
  }
}
