import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { SkeletonComponent } from 'src/app/shared/ui/skeleton/skeleton.component';
import { Precious } from 'src/app/shared/models/percious';

@Component({
  selector: 'mcl-garelley',
  templateUrl: './garelley.component.html',
  styleUrls: ['./garelley.component.scss'],
  imports: [SkeletonComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GarelleyComponent {
  loading = input<boolean>(true);
  items = input<Precious[]>([]);
  onDetail = output<Precious>();
}
