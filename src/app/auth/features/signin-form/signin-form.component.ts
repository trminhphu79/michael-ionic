import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
  output,
} from '@angular/core';
import {
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';
import { TAuthSignInForm, TSignIn } from '../../data-access/type';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'mcl-signin-form',
  standalone: true,
  templateUrl: './signin-form.component.html',
  styleUrls: ['./signin-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, IonicModule],
})
export class SigninFormComponent implements OnInit {
  formChanges = output<TSignIn>();

  private readonly fb = inject(NonNullableFormBuilder);
  protected signInForm!: FormGroup<TAuthSignInForm>;

  ngOnInit() {
    this.signInForm = this.fb.group<TAuthSignInForm>({
      username: this.fb.control(''),
      password: this.fb.control(''),
    });

    this.signInForm.valueChanges.subscribe(() => {
      this.formChanges.emit(this.signInForm.getRawValue());
    });
  }
}
