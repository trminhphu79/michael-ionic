import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { User } from '../models/user';

@Injectable({ providedIn: 'root' })
export class StorageManager {
  fetchData() {
    return of({
      users: [
        {
          username: 'michael',
          password: 'michael',
        },
        {
          username: 'tmp79',
          password: 'tmp79',
        },
      ] as User[],
    });
  }
}
