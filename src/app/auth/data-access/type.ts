import { FormControl } from '@angular/forms';

export type TSignIn = {
  username: string;
  password: string;
};

export type TRegister = {
  confirmPassword: string;
  fullName: string;
} & TSignIn;

export type TAuthSignInForm = {
  username: FormControl<string>;
  password: FormControl<string>;
};

export type TAuthRegisterForm = {
  confirmPassword: FormControl<string>;
  fullName: FormControl<string>;
} & TAuthSignInForm;

export type TAuthForm = TAuthRegisterForm | TAuthSignInForm;
