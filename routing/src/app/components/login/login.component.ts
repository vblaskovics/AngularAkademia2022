import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { SigninFormModel } from './model/signin-form.model';
import { SigninForm } from './signin.form';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public form: FormGroup<SigninFormModel> = new SigninForm();
  message = '';

  constructor(public loginService: LoginService) {}

  ngOnInit(): void {}

  onLogin(): void {
    this.login(this.form.controls.username.value, this.form.controls.password.value)
  }

  login(username: string, password: string) {
    this.message = '';
    let successLogin = this.loginService.login(username, password);
    if (!successLogin) {
      this.message = "Invalid username or password!";
      setTimeout(() => {
        this.message = '';
      }, 3000);
    }
  }
}
