import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { PreciousMomentFormComponent } from './features/precious-moment-form/precious-moment-form.component';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
@Component({
  selector: 'mcl-precious-moment',
  templateUrl: './precious-moment.component.html',
  styleUrls: ['./precious-moment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PreciousMomentComponent implements OnInit {
  private readonly router = inject(Router);
  private readonly modalCtrl = inject(ModalController);

  constructor() {}

  ngOnInit() {}

  back() {
    this.router.navigate(['/']);
  }

  newPost() {
    const obs$ = new Observable((observer) => {
      this.modalCtrl
        .create({
          component: PreciousMomentFormComponent,
          breakpoints: [0, 0.5, 0.9],
          initialBreakpoint: 0.9,
        })
        .then((modal) => {
          modal.present();
          modal.onWillDismiss().then(({ data }) => {
            observer.next(data);
            observer.complete();
          });
        })
        .catch((err) => {
          observer.error(err);
        });
    });

    obs$.subscribe({
      next: (value) => {
        console.log('value: ', value);
      },
    });
  }
}
