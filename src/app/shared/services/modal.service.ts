import { Injectable, Type, inject } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import type { ModalOptions } from '@ionic/core';

@Injectable()
export class ModalService {
  private controller = inject(ModalController);

  open<T = any, R = any>(
    component: Type<T>,
    options: Partial<ModalOptions> = {}
  ): Observable<R> {
    return new Observable<R>((observer) => {
      this.controller
        .create({
          component,
          ...options,
        })
        .then((modal) => {
          modal.present();

          modal.onWillDismiss().then(({ data }) => {
            observer.next(data as R);
            observer.complete();
          });
        })
        .catch((err) => {
          observer.error(err);
        });
    });
  }
}
