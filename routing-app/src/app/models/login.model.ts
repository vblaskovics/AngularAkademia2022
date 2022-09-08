import { LoginFormModel } from './login-form.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

export class LoginForm extends FormGroup<LoginFormModel> {
  constructor() {
    super({
      userName: new FormControl<string>('', {
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
