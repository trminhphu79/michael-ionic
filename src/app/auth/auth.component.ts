import { IonicModule } from '@ionic/angular';
import { Component, inject, linkedSignal, OnInit, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { setLogin, setRegister } from '../shared/store/actions';
import { FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { AuthTab } from './data-access/enum';
import { TAuthForm, TRegister, TSignIn } from './data-access/type';
import { SigninFormComponent } from './features/signin-form/signin-form.component';
import { RegisterFormComponent } from './features/register-form/register-form.component';
import { LOGIN_TITLE, REGISTER_TITLE } from './data-access/constants';

@Component({
  selector: 'mcl-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  imports: [SigninFormComponent, RegisterFormComponent, IonicModule],
})
export class AuthComponent implements OnInit {
  private readonly store = inject(Store);

  protected userForm!: FormGroup<TAuthForm>;
  protected authTab = AuthTab;
  protected selectedType = signal<AuthTab>(AuthTab.SignIn);
  protected selectedTitle = linkedSignal(() => {
    return this.selectedType() === this.authTab.SignIn
      ? LOGIN_TITLE
      : REGISTER_TITLE;
  });

  protected formData = signal<{
    register: TRegister | null;
    signIn: TSignIn | null;
  }>({ register: null, signIn: null });
  ngOnInit() {}

  formChanges(data: TRegister | TSignIn, type: AuthTab) {
    if (!data) {
      return;
    }
    switch (type) {
      case AuthTab.SignIn:
        this.formData.set({
          ...this.formData(),
          signIn: data,
        });
        break;
      default:
        this.formData.set({
          ...this.formData(),
          register: data as TRegister,
        });
        break;
    }
  }

  switchTo(type: AuthTab) {
    this.selectedType.set(type);
  }

  submitLogin() {
    if (!this.formData().signIn?.username) {
      return;
    }
    this.store.dispatch(setLogin({ ...(this.formData().signIn as TSignIn) }));
  }

  submitRegister() {
    if (!this.formData().register?.username) {
      return;
    }
    this.store.dispatch(
      setLogin({ ...(this.formData().register as TRegister) })
    );
  }
}
