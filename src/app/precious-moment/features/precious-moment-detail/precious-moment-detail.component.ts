import { IonContent } from '@ionic/angular/standalone';
import {
  ChangeDetectionStrategy,
  Component,
  input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'mcl-precious-moment-detail',
  templateUrl: './precious-moment-detail.component.html',
  styleUrls: ['./precious-moment-detail.component.scss'],
  imports: [IonContent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PreciousMomentDetailComponent implements OnInit {
  slug = input<string>();

  constructor() {}

  ngOnInit() {
    console.log('slug:', this.slug());
  }
}
