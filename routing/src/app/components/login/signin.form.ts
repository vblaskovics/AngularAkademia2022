import { FormGroup, FormControl, Validators } from "@angular/forms";
import { SigninFormModel } from "./model/signin-form.model";

export class SigninForm extends FormGroup<SigninFormModel> {
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
    })
  }
}
