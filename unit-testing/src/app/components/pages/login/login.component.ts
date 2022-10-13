import { Component, OnInit } from '@angular/core';
import { LoginFormModel } from './models/loginform.model';
import { LoginForm } from './login';
import { FormGroup } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form: FormGroup<LoginFormModel> = new LoginForm();
  message = ''

  constructor(public authService: LoginService, private router: Router){
  }

  ngOnInit(): void {
    this.authService.isLoggedIn() ? this.router.navigate(['/home']) : null
  }
  
  onSubmit() {
    console.log(this.form.value)
    this.login(this.form.value.username!, this.form.value.password!)
  }
  
  login(username: string, password: string) {
    this.message = '';
    let successLogin = this.authService.login(username, password)
    if(successLogin) {
      this.router.navigate(['/home'])
      return
    }
    this.message = 'invalid username or password!'
    setTimeout(() => {
      this.message = ''
    }, 2000)
  }

}
