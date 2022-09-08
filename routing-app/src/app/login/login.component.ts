import { LoginService } from './../services/login.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginFormModel } from '../models/login-form.model';
import { LoginForm } from '../models/login.model';

// type LoginForm = {
//   userName: FormControl<string>;
//   password: FormControl<string>;
// };

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  message = '';
  // form: FormGroup;

  public form: FormGroup<LoginFormModel> = new LoginForm();

  constructor(public loginService: LoginService) {
    // this.form = new FormGroup<LoginForm>({
    //   userName: new FormControl<string>('', {
    //     nonNullable: true,
    //     validators: [Validators.required],
    //   }),
    //   password: new FormControl<string>('', {
    //     nonNullable: true,
    //     validators: [Validators.required],
    //   }),
    // });
  }

  ngOnInit(): void {}

  public loginUser(): void {
    this.login(this.form.value.userName!, this.form.value.password!);

    // const user = this.form.value;

    this.form.reset();
  }

  login(username: string, password: string) {
    this.message = '';
    let successLogin = this.loginService.login(username, password);

    if (!successLogin) {
      this.message = 'Invalid username or password!';
      setTimeout(() => {
        this.message = '';
      }, 3000);
    }
  }
}
