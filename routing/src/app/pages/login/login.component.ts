import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { LoginForm } from './login-form';
import { ILoginForm } from './login-form.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup<ILoginForm> = new LoginForm();
  message: string = '';
  constructor(public loginService: LoginService) {}

  ngOnInit(): void {}
  get username(): FormControl {
    return this.loginForm.get('username') as FormControl;
  }
  get password(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }
  handleSubmit() {
    if (this.loginForm.valid) {
      this.login(this.username.value, this.password.value);
      alert('siker');
    } else {
      alert('nemsiker');
      this.loginForm.markAllAsTouched();
    }
  }
  login(username: string, password: string) {
    this.message = '';

    let successLogin = this.loginService.login(username, password);
    if (!successLogin) {
      this.message = 'invalid u name or password';
      setTimeout(() => {
        this.message = '';
      }, 3000);
    }
  }
}
