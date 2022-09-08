import { Component, OnInit } from '@angular/core';
import { LoginForm } from './login.form';
import { LoginFormModel } from './models/login-form.model';
import { FormGroup } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup<LoginFormModel> = new LoginForm();
  message: string = '';

  constructor(public loginService: LoginService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.login(this.loginForm.controls.username.value, this.loginForm.controls.password.value)
  }

  login(username: string, password:string) {
    this.message = '';
    let successLogin = this.loginService.login(username, password);

    if(!successLogin){
      this.message = 'Invalid username or password!';
      setTimeout(() => {
        this.message = '';
      }, 3000);
    }
  }
}
