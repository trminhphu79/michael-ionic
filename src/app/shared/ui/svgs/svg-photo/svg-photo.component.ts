import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'mcl-svg-photo',
  templateUrl: './svg-photo.component.html',
  styleUrls: ['./svg-photo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class SvgPhotoComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
