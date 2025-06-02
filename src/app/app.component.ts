import { Component, inject } from '@angular/core';
import { IonApp, IonRouterOutlet, IonNav } from '@ionic/angular/standalone';
import { Store } from '@ngrx/store';
import { setSyncCacheData } from './shared/store/actions';

@Component({
  selector: 'mcl-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
  providers: [IonNav],
})
export class AppComponent {
  store = inject(Store);
  constructor() {
    this.store.dispatch(setSyncCacheData());
  }
}
