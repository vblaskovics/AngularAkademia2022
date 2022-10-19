import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { SignInForm } from './sign-in-form.interface';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  loginForm: FormGroup<SignInForm>;
  errorMessage = '';
  constructor(private authService: AuthService, private router: Router) {
    this.loginForm = new FormGroup({
      username: new FormControl('', {
        validators: [Validators.required],
        nonNullable: true,
      }),
      password: new FormControl('', {
        validators: [Validators.required],
        nonNullable: true,
      }),
    });
  }
  get username(): FormControl {
    return this.loginForm.get('username') as FormControl;
  }

  get password(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }
  ngOnInit(): void {}
  submitForm() {
    if (this.loginForm.valid) {
      const login = this.authService.login(
        this.username.value,
        this.password.value
      );
      login
        ? this.router.navigate(['/todo'])
        : (this.errorMessage = 'hibas felhasznalonev vagy jelszo');
    } else {
      this.loginForm.markAllAsTouched();
    }
    console.log(this.loginForm);
  }
}
