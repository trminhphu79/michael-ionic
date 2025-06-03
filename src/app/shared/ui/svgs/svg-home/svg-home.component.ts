import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'mcl-svg-home',
  templateUrl: './svg-home.component.html',
  styleUrls: ['./svg-home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class SvgHomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
