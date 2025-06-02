import { Component, inject, OnInit } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { IonApp, IonRouterOutlet, IonNav } from '@ionic/angular/standalone';
import { Store } from '@ngrx/store';
import { setSyncCacheData } from '../shared/store/actions';
import { selectAccounts } from '../shared/store/selectors';
import { toSignal } from '@angular/core/rxjs-interop';
import { timer } from 'rxjs';

@Component({
  selector: 'mcl-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  imports: [FooterComponent, HeaderComponent, IonRouterOutlet],
})
export class LayoutComponent implements OnInit {
  private store = inject(Store);
  private accounts$ = this.store.select(selectAccounts);
  private accounts = toSignal(this.accounts$);
  private loggedUser = this.store.select((s) => s.global.user);

  constructor() {
    this.store
      .select((s) => s.global.user)
      .subscribe((r) => {
        console.log('logged user', r);
      });
  }

  ngOnInit() {
    console.log('layout init');
    timer(2000).subscribe(() => {
      console.log('accounts:', this.accounts());
    });
  }
}
