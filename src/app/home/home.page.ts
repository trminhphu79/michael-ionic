import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { IonContent, IonNav } from '@ionic/angular/standalone';
import { FilterActionsComponent } from './features/filter-actions/filter-actions.component';
import { GarelleyComponent } from './features/garelley/garelley.component';
import { generateGaralleyList } from './data-access/util';
import { GaralleyList } from './data-access/model';
import { WelcomeCardComponent } from '../shared/ui/welcome-card/welcome-card.component';
import { Router } from '@angular/router';

@Component({
  selector: 'mcl-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonContent,
    FilterActionsComponent,
    GarelleyComponent,
    WelcomeCardComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {
  navigator = inject(IonNav);
  router = inject(Router);

  dataSource = signal<GaralleyList>([]);

  constructor() {}

  ngOnInit() {
    console.log("init...")
    const items = generateGaralleyList(50);
    this.dataSource.set(items);
    console.log('Items', items);
    console.log('dataSource:', this.dataSource());
  }

  onNewPost(event: any) {
    console.log('onNewPost:', event);
    this.router.navigate(['/precious']);
  }
}
