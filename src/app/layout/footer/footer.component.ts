import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  IonTabBar,
  IonTabButton,
  IonRippleEffect
} from '@ionic/angular/standalone';

@Component({
  selector: 'mcl-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [IonTabBar, IonTabButton, IonRippleEffect],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
