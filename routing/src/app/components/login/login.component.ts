import { LoginService } from './../../services/login.service';
import { LoginForm } from './login.form';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginFormModel } from './form-model/login-form-model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form: FormGroup<LoginFormModel> = new LoginForm();
  message = '';

  get username(): FormControl {
    return this.form.get('username') as FormControl;
  }

  get password(): FormControl {
    return this.form.get('password') as FormControl;
  }

  constructor(public loginService: LoginService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('Login successful:', this.form.value);
    // this.login(this.username.value, this.password.value);
    this.login(this.form.controls.username.value, this.form.controls.password.value);
    this.form.reset();
  }

  login(username: string, password: string) {
    this.message = '';
    let successLogin = this.loginService.login(username, password);

    if(!successLogin) {
      this.message = 'Invalid username or password!';
      setTimeout(() => {
        this.message = '';
      }, 3000);
    }
  }
}
