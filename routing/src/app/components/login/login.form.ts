import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginFormModel } from './models/login-form.model';


export class LoginForm extends FormGroup<LoginFormModel>{
  constructor(){
    super({
      username: new FormControl<string>(
        '',
        {nonNullable: true, validators: [Validators.required],updateOn: 'change'}
      ),
      password: new FormControl<string>(
        '',
        {nonNullable: true, validators: [Validators.required],updateOn: 'change'}
      ),
    })
  }
}
