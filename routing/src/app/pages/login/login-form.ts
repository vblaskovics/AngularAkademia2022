import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ILoginForm } from './login-form.model';

export class LoginForm extends FormGroup<ILoginForm> {
  constructor() {
    super({
      username: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      password: new FormControl<string>('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
    });
  }
}
