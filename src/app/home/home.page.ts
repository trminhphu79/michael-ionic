import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  Signal,
  signal,
} from '@angular/core';
import {
  IonContent,
  IonNav,
  IonHeader,
  IonToolbar,
  IonTitle,
  ModalController,
} from '@ionic/angular/standalone';
import { FilterActionsComponent } from './features/filter-actions/filter-actions.component';
import { GarelleyComponent } from './features/garelley/garelley.component';
import { WelcomeCardComponent } from '../shared/ui/welcome-card/welcome-card.component';
import { Router } from '@angular/router';
import { SearchComponent } from '../shared/ui/search/search.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {
  debounce,
  debounceTime,
  distinctUntilChanged,
  map,
  Observable,
  startWith,
  tap,
  timer,
} from 'rxjs';
import { ModalService } from '../shared/services/modal.service';
import { PhotoModalComponent } from './features/photo-modal/photo-modal.component';
import { Store } from '@ngrx/store';
import { selectPrecious } from '../shared/store/selectors';
import { toSignal } from '@angular/core/rxjs-interop';
import { Precious } from '../shared/models/percious';

@Component({
  selector: 'mcl-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonContent,
    FilterActionsComponent,
    GarelleyComponent,
    WelcomeCardComponent,
    IonHeader,
    IonToolbar,
    IonTitle,
    SearchComponent,
    ReactiveFormsModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ModalController],
})
export class HomePage {
  private readonly router = inject(Router);
  private readonly store = inject(Store);
  private readonly modalService = inject(ModalController);

  private readonly accounts$ = this.store.select(selectPrecious);

  protected readonly searchControl = new FormControl('');
  protected readonly loading = signal(true);

  protected readonly valueChanges = toSignal(
    this.searchControl.valueChanges.pipe(
      tap(() => {
        this.loading.set(true);
      }),
      debounceTime(200),
      distinctUntilChanged(),
      startWith(''),
      tap(() => this.loading.set(false))
    )
  );

  protected readonly dataSource = toSignal(this.accounts$) as Signal<
    Precious[]
  >;

  protected dataSourceFilter = computed(() => {
    const reuslt = this.dataSource().filter((item) => {
      return this.valueChanges()
        ? item.title
            .toLowerCase()
            .includes(this.valueChanges()?.toLowerCase() + '')
        : true;
    });
    return reuslt;
  });

  onNewPost(event: any) {
    this.router.navigate(['/precious']);
  }

  onDetail(event: Precious) {
    const obs$ = new Observable((observer) => {
      console.log(this.modalService);
      this.modalService
        .create({
          component: PhotoModalComponent,
          componentProps: {
            item: event,
          },
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
