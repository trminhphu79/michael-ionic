import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  Input,
} from '@angular/core';

@Component({
  selector: 'mcl-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkeletonComponent {
  count = input<number>(10);
  type = input<'photo' | 'line' | 'card'>('photo');
  items = computed(() => Array.from({ length: this.count() }, (_, i) => i));
}
