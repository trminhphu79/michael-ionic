import {
  ChangeDetectionStrategy,
  Component,
  input,
  OnInit,
} from '@angular/core';
import { Precious } from '../../models/percious';

@Component({
  selector: 'mcl-photo-detail',
  templateUrl: './photo-detail.component.html',
  styleUrls: ['./photo-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhotoDetailComponent implements OnInit {
  item = input.required<Precious>();
  loaded = false;

  constructor() {}

  ngOnInit() {}

  onImageLoad() {
    this.loaded = true;
  }
}
