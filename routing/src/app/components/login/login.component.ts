import { Component, OnInit } from '@angular/core';
import { LoginFormModel } from './models/loginform.model';
import { LoginForm } from './loginform';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form: FormGroup<LoginFormModel> = new LoginForm();
  message = ''

  constructor(public authService: AuthService){
  }

  ngOnInit(): void {
  }
  
  onSubmit() {
    console.log(this.form.value)
    this.login(this.form.value.username!, this.form.value.password!)
  }
  
  login(username: string, password: string) {
    this.message = '';
    let successLogin = this.authService.login(username, password)

    if(!successLogin){
      this.message = 'invalid username or password!'
      setTimeout(() => {
        this.message = ''
      }, 3000)
    }
  }

}
