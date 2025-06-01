import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonNav,
} from '@ionic/angular/standalone';
import { FilterActionsComponent } from './features/filter-actions/filter-actions.component';
import { GarelleyComponent } from './features/garelley/garelley.component';
import { UserCardComponent } from '../shared/ui/user-card/user-card.component';
import { generateGaralleyList } from './data-access/util';
import { GaralleyList } from './data-access/model';
import { WelcomeCardComponent } from '../shared/ui/welcome-card/welcome-card.component';
import { PreciousMomentComponent } from '../precious-moment/precious-moment.component';
import { Router } from '@angular/router';

@Component({
  selector: 'mcl-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonHeader,
    FilterActionsComponent,
    GarelleyComponent,
    UserCardComponent,
    WelcomeCardComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {
  navigator = inject(IonNav);
  router = inject(Router);

  dataSource = signal<GaralleyList>([]);

  constructor() {
    const items = generateGaralleyList(50);
    this.dataSource.set(items);
    console.log('dataSource:', this.dataSource());
  }

  onNewPost(event: any) {
    console.log('onNewPost:', event);
    this.router.navigate(['precious']);
  }
}
