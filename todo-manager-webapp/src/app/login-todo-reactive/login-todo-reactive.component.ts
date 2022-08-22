import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, FormBuilder} from '@angular/forms';
import { PasswordValidators } from './password.validators';

@Component({
  selector: 'app-login-todo-reactive',
  templateUrl: './login-todo-reactive.component.html',
  styleUrls: ['./login-todo-reactive.component.css']
})
export class LoginTodoReactiveComponent {
  forms = new FormGroup({
    firstname: new FormControl(),
    lastname: new FormControl(),
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20)
    ]),
    zip: new FormControl(),
  });

  get username() {
    return this.forms.get('username');
  }

  get password() {
    return this.form.get('password');
  }
  get passwordre() {
    return this.form.get('passwordre');
  }

  submit(f: any) {
    console.log(f);
  }

  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form =fb.group({
      // password: ['', Validators.required, PasswordValidators.cannotContainSpace],
      passwordre: ['', Validators.required, PasswordValidators.passwordsShouldMatch],
    })

  }
}
