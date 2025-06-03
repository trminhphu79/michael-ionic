import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'mcl-svg-search',
  templateUrl: './svg-search.component.html',
  styleUrls: ['./svg-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class SvgSearchComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
