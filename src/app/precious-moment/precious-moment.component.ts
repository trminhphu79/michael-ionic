import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'mcl-precious-moment',
  templateUrl: './precious-moment.component.html',
  styleUrls: ['./precious-moment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PreciousMomentComponent implements OnInit {
  private readonly router = inject(Router);
  constructor() {}

  ngOnInit() {}

  back() {
    this.router.navigate(['/']);
  }
}
