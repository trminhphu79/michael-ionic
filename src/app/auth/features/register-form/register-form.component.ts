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
import { TAuthRegisterForm, TRegister } from '../../data-access/type';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'mcl-register-form',
  standalone: true,
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, IonicModule],
})
export class RegisterFormComponent implements OnInit {
  formChanges = output<TRegister>();

  private readonly fb = inject(NonNullableFormBuilder);
  protected registerForm!: FormGroup<TAuthRegisterForm>;

  ngOnInit() {
    this.registerForm = this.fb.group<TAuthRegisterForm>({
      username: this.fb.control(''),
      password: this.fb.control(''),
      confirmPassword: this.fb.control(''),
      fullName: this.fb.control(''),
    });

    this.registerForm.valueChanges.subscribe(() => {
      this.formChanges.emit(this.registerForm.getRawValue());
    });
  }
}
