import { LoginService } from './../services/login.service';
import { FormControl } from '@angular/forms';
import { UserFormModel } from './user-form.model';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserForm } from './user-form';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form: FormGroup<UserFormModel> = new UserForm;
  message: string = '';

  get username(): FormControl {
    return this.form.get('username') as FormControl;
  }

  get password(): FormControl {
    return this.form.get('password') as FormControl;
  }

  constructor( private loginService: LoginService) { }

  ngOnInit(): void {
  }

  onSubmit(){

    this.login(this.username.value, this.password.value)
    // this.form.reset()
  }

  login(username: string, password: string){
    this.message = '';
    let successLogin = this.loginService.login(username, password);

    if (!successLogin) {
      this.message = 'Invalid Username or Pasword';
      setTimeout(()=> {this.message = ''}, 3000)
    }
  }

}
