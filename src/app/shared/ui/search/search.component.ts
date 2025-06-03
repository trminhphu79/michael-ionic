import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  input,
  OnInit,
} from '@angular/core';
import { SvgSearchComponent } from '../svgs/svg-search/svg-search.component';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'mcl-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  imports: [SvgSearchComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SearchComponent),
      multi: true,
    },
  ],
})
export class SearchComponent implements OnInit, ControlValueAccessor {
  placeHolder = input<string>('Search in photos, videos, memories...');
  value: string = '';
  disabled = false;

  constructor() {}
  ngOnInit() {}

  private onChange = (value: string) => {};
  private onTouched = () => {};

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onInput(event: Event) {
    console.log('On input: ', event);
    const input = event.target as HTMLInputElement;
    this.value = input.value;
    this.onChange(this.value);
  }

  onBlur() {
    this.onTouched();
  }
}
