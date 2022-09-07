import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';

type LoginForm = {
  username: FormControl<string>,
  password: FormControl<string>,
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm: FormGroup;
  message = '';

  constructor(public loginService:LoginService) {
    this.myForm = new FormGroup<LoginForm>({
      username: new FormControl<string>('', { nonNullable: true, validators: Validators.required }),
      password: new FormControl<string>('', { nonNullable: true, validators: Validators.required }),
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.login(this.myForm.value.username, this.myForm.value.password)
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
