import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'mcl-filter-actions',
  templateUrl: './filter-actions.component.html',
  styleUrls: ['./filter-actions.component.scss'],
  imports: [ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterActionsComponent implements OnInit {
  searchControl = new FormControl<string>('');
  ngOnInit() {}
}
