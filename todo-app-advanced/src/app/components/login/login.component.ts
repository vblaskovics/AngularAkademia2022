import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { LoginForm } from './login.form';
import { LoginFormModel } from './model/userLogin-form.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  invalidLoginMessage: string = ''
  loginForm: FormGroup<LoginFormModel> = new LoginForm();

  constructor(public loginService: LoginServiceService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.login(this.loginForm.controls.username.value, this.loginForm.controls.password.value)
  }

  login(username: string, password: string){
    this.invalidLoginMessage = '';
    let loggedInSuccesfully = this.loginService.login(username, password);


    if(!loggedInSuccesfully){
      this.invalidLoginMessage = 'Invalid username and password!'
      setTimeout(() => {
        this.invalidLoginMessage = '';
      }, 3000);
    }
  }

}
