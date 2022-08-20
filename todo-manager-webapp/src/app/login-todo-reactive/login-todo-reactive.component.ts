import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login-todo-reactive',
  templateUrl: './login-todo-reactive.component.html',
  styleUrls: ['./login-todo-reactive.component.css']
})
export class LoginTodoReactiveComponent implements OnInit {
  form = new FormGroup({
    firstname: new FormControl(),
    lastname: new FormControl(),
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20)
    ]),
    zip: new FormControl(),
    password: new FormControl('', Validators.required),
    passwordre: new FormControl('', Validators.required)
  });

  get username() {
    return this.form.get('username');
  }

  get password() {
    return this.form.get('password');
  }
  constructor() { }

  ngOnInit(): void {
  }

}
