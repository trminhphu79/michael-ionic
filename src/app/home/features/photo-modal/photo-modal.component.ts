import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PhotoDetailComponent } from 'src/app/shared/ui/photo-detail/photo-detail.component';
import { Precious } from 'src/app/shared/models/percious';

@Component({
  selector: 'mcl-photo-modal',
  templateUrl: './photo-modal.component.html',
  styleUrls: ['./photo-modal.component.scss'],
  imports: [PhotoDetailComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhotoModalComponent {
  item!: Precious;
}
