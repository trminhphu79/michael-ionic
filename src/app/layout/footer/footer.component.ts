import { AsyncPipe, NgComponentOutlet, NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import {
  IonIcon,
  IonTabBar,
  IonFooter,
  IonTabButton,
  IonRippleEffect,
} from '@ionic/angular/standalone';
import { SvgRendererPipe } from 'src/app/shared/pipes/svg-renderer.pipe';
import { SvgHomeComponent } from 'src/app/shared/ui/svgs/svg-home/svg-home.component';
import { SvgPhotoComponent } from 'src/app/shared/ui/svgs/svg-photo/svg-photo.component';
import { SvgSettingComponent } from 'src/app/shared/ui/svgs/svg-setting/svg-setting.component';

import { NavController } from '@ionic/angular';

@Component({
  selector: 'mcl-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [
    IonIcon,
    IonFooter,
    NgIf,
    AsyncPipe,
    IonTabBar,
    IonTabButton,
    IonRippleEffect,
    RouterLink,
    SvgRendererPipe,
    NgComponentOutlet,
    RouterLinkActive,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent implements OnInit {
  router = inject(Router);
  router2 = inject(NavController);
  cd = inject(ChangeDetectorRef);

  routerSettings = signal([
    {
      path: '/',
      svg: SvgHomeComponent,
      label: 'Home',
      active: false,
      id: 'home',
    },
    {
      path: '/precious',
      svg: SvgPhotoComponent,
      label: 'Percious',
      active: false,
      id: 'precious',
    },
    {
      path: '/settings',
      svg: SvgSettingComponent,
      label: 'Settings',
      active: false,
      id: 'setting',
    },
  ]);
  constructor() {}

  ngOnInit() {}

  routerChange(item: any) {
    this.routerSettings.update((list) =>
      list.map((_ite) => ({
        ..._ite,
        active: _ite.id === item.id ? !_ite.active : false,
      }))
    );
  }

  navigate(item: any) {
    this.router2.navigateForward(item.path);
  }
}


/**
 * Features: Home, Upload, Settings, Authentication
 * Application <-> Sync data <-> cache 
 */