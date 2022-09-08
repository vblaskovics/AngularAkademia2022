import { FormControl, FormGroup, Validators } from "@angular/forms";
import { LoginFormModel } from "./model/userLogin-form.model";

export class LoginForm extends FormGroup<LoginFormModel> {
  constructor(){
    super({
      username: new FormControl<string>(
        '',
        {nonNullable: true, validators:[Validators.required,Validators.pattern(/^[A-Z][a-z]+/)],}
      ),
      password: new FormControl<string>(
        '',
        {nonNullable: true, validators:[Validators.required,Validators.pattern(/^[A-Z][a-z]+/)],}
      ),
    })
  }
}
