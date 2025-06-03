import { IonContent, IonHeader } from '@ionic/angular/standalone';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { selectUser } from '../shared/store/selectors';
import { toSignal } from '@angular/core/rxjs-interop';
import { setLogout } from '../shared/store/actions';

@Component({
  selector: 'mcl-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  imports: [IonContent, IonHeader],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsComponent {
  private readonly store = inject(Store);

  protected readonly userInfo = toSignal(this.store.select(selectUser));

  logout() {
    this.store.dispatch(setLogout());
  }
}
