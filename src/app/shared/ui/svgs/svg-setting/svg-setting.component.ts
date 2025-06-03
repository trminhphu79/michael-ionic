import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'mcl-svg-setting',
  templateUrl: './svg-setting.component.html',
  styleUrls: ['./svg-setting.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class SvgSettingComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
