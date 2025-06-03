import { inject, InjectionToken, provideAppInitializer } from '@angular/core';
import { StorageManager } from '../services/storage.service';
import {
  ACCOUNTS_CACHE_KEY,
  PRECIOUS_CACHE_KEY,
  USER_CACHE_KEY,
} from '../constants/cache';
import { delay, firstValueFrom, forkJoin, from, map, of, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import { setSyncCacheData } from '../store/actions';
import { User } from '../models/user';
import { generateGaralleyList, generateUserList } from './generator';
import { Precious } from '../models/percious';

export const CACHE_INITIALIZER = new InjectionToken<() => Promise<void>>(
  'CACHE_INITIALIZER'
);

export const provideSyncCache = () =>
  provideAppInitializer(async () => {
    const store = inject(Store);
    const storageManager = inject(StorageManager);

    await storageManager.init();

    const request$ = {
      user: storageManager.get<User>(USER_CACHE_KEY),
      accounts: storageManager.get<User[]>(ACCOUNTS_CACHE_KEY),
      precious: storageManager.get<Precious[]>(PRECIOUS_CACHE_KEY),
    };
    await firstValueFrom(
      forkJoin(request$).pipe(
        tap(({ accounts, precious, user }) => {
          if (!precious?.length) {
            precious = generateGaralleyList(30);
            storageManager.set(PRECIOUS_CACHE_KEY, precious);
          }
          if (!accounts?.length) {
            accounts = generateUserList(5);
            storageManager.set(ACCOUNTS_CACHE_KEY, accounts);
          }

          store.dispatch(setSyncCacheData({ users: accounts, precious, user }));
        })
      )
    );
  });
