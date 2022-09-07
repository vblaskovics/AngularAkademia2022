import { FormControl, FormGroup, Validators } from "@angular/forms";
import { LoginFormModel } from "./form-model/login-form-model";

export class LoginForm extends FormGroup<LoginFormModel> {

  constructor() {
    super({
      username: new FormControl<string>('', {nonNullable: true, validators: [Validators.required]}),
      password: new FormControl<string>('', {nonNullable: true, validators: [Validators.required]})
    })
  }
}
