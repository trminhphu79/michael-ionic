import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'mcl-svg-arrow-left',
  templateUrl: './svg-arrow-left.component.html',
  styleUrls: ['./svg-arrow-left.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class SvgArrowLeftComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
