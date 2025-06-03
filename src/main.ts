import { bootstrapApplication } from '@angular/platform-browser';
import {
  RouteReuseStrategy,
  provideRouter,
  withPreloading,
  PreloadAllModules,
  withViewTransitions,
} from '@angular/router';
import {
  IonicRouteStrategy,
  provideIonicAngular,
  ModalController,
} from '@ionic/angular/standalone';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import GlobalReducer from './app/shared/store/reducers';
import { GlobalEffect } from './app/shared/store/effects';
import { importProvidersFrom, isDevMode } from '@angular/core';
import { provideServiceWorker } from '@angular/service-worker';
import { SafeArea } from '@capacitor-community/safe-area';
import { provideHttpClient } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage-angular';
import { provideSyncCache } from './app/shared/utils/provider';

SafeArea.enable({
  config: {
    customColorsForSystemBars: true,
    statusBarColor: '#00000000',
    statusBarContent: 'light',
    navigationBarColor: '#00000000',
    navigationBarContent: 'light',
  },
});

defineCustomElements(window);

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(
      routes,
      withPreloading(PreloadAllModules),
      withViewTransitions()
    ),
    provideStore({
      global: GlobalReducer,
    }),
    provideEffects(GlobalEffect),
    provideHttpClient(),
    ModalController,
    provideSyncCache(),
    importProvidersFrom([IonicStorageModule.forRoot()]),
    // provideServiceWorker('ngsw-worker.js', {
    //   enabled: !isDevMode(),
    // }),
  ],
});
