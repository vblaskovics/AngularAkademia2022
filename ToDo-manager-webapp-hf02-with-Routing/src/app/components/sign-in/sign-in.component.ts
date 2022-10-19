import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { LoginService } from 'src/app/shared/login.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  myForm: FormGroup;
  message: string = '';
  hide = true;

  constructor(fb: FormBuilder, public loginService: LoginService) {
    this.myForm = fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      username: ['', [Validators.required, Validators.minLength(4), 
        // Validators.pattern(/[a-z]+[0-9]{1,3}/)
      ]],
      zip: [
        '',
        [Validators.required, Validators.min(1000), Validators.max(9999)],
      ],
      password: ['', [Validators.required, Validators.minLength(8),]],
        // Validators.pattern(/^[a-zA-Z0-9]+(.*Đ$ß#4?)/
        
    });
  }

  ngOnInit(): void {}

  get firstname(): FormControl{
    return this.myForm.get('firstname') as FormControl;
  }

  get lastname(): FormControl{
    return this.myForm.get('lastname') as FormControl;
  }

  get username(): FormControl {
    return this.myForm.get('username') as FormControl;
  }

  get zip(): FormControl {
    return this.myForm.get('zip') as FormControl;
  }

  get password(): FormControl {
    return this.myForm.get('password') as FormControl;
  }



  protected onSubmit(){

    // this.login(this.username.value, this.password.value)
    // this.form.reset()
    this.login(this.username.value, this.password.value)
    
  }

  login(username: string, password: string){
    this.message = '';
    let successLogin = this.loginService.login(username, password);

    if (!successLogin) {
      this.message = 'Invalid Username or Password';
      setTimeout(()=> {this.message = ''}, 3000)
    }
  }

  logout(){
    this.loginService.logout();
    this.myForm.reset();
  }

  getFirstNameErrorMessage() {
    if (this.firstname.hasError('required')) {
      return 'You must enter your firstname!';
    }

    return this.firstname.hasError('firstname') ? 'Not a valid firstname' : '';
  }

  getPasswordErrorMessage() {
    if (this.password.hasError('required')) {
      return 'You must enter your password!';
    }

    return this.password.hasError('password') ? 'Not a valid password' : '';
  }

  getLastNameErrorMessage() {
    if (this.lastname.hasError('required')) {
      return 'You must enter your lastname!';
    }

    return this.lastname.hasError('lastname') ? 'Not a valid lastname' : '';
  }

  getUsernameErrorMessage() {
    if (this.username.hasError('required')) {
      return 'You must enter your username!';
    }

    return this.username.hasError('username') ? 'Not a valid username' : '';
  }

  getZipErrorMessage() {
    if (this.zip.hasError('required')) {
      return 'You must enter your zip code!';
    }

    return this.zip.hasError('zip') ? 'Not a valid zip code' : '';
  }
}
