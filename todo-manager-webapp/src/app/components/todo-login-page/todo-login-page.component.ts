import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

type LoginForm = {
  userName: FormControl<string>;
  password: FormControl<string>;
};

@Component({
  selector: 'app-todo-login-page',
  templateUrl: './todo-login-page.component.html',
  styleUrls: ['./todo-login-page.component.css'],
})
export class TodoLoginPageComponent implements OnInit {
  message = '';

  form: FormGroup<LoginForm>;

  constructor(public authService: AuthService) {
    this.form = new FormGroup<LoginForm>({
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

  ngOnInit(): void {}

  loginUser(): void {
    this.login(
      this.form.controls.userName.value,
      this.form.controls.password.value
    );

    this.form.reset();
  }

  login(username: string, password: string) {
    this.message = '';
    let successLogin = this.authService.login(username, password);
    console.log(successLogin);

    if (!successLogin) {
      this.message = 'Invalid username or password!';
      setTimeout(() => {
        this.message = '';
      }, 3000);
    }
  }
}
