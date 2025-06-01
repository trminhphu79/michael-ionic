import {
  ChangeDetectionStrategy,
  Component,
  input,
  OnInit,
  output,
} from '@angular/core';

import { IonButtons, IonButton } from '@ionic/angular/standalone';
@Component({
  selector: 'mcl-welcome-card',
  templateUrl: './welcome-card.component.html',
  styleUrls: ['./welcome-card.component.scss'],
  imports: [IonButtons, IonButton],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WelcomeCardComponent implements OnInit {
  userName = input<string>('Michael Tran');
  onNewPost = output<void>();
  constructor() {}

  ngOnInit() {}
}
