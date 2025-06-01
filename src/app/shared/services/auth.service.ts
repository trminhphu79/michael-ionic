import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor() {}
  login(username: string, password: string): Observable<boolean> {
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
