import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.css'],
})
export class SignInFormComponent implements OnInit {
  signInForm: FormGroup;
  //.@*# min8 1 letter 1 number

  constructor(fb: FormBuilder) {
    this.signInForm = fb.group({
      firstName: ['', Validators.pattern(/^[A-Z][a-z]+$/)],
      lastName: ['', Validators.pattern(/^[A-Z][a-z]+$/)],
      username: ['', [Validators.minLength(4), Validators.pattern(/^[a-z0-9]{2,}$/)]],
      zip: ['', Validators.pattern(/^[0-9]{4,5}$/)],
      password: [
        '',
        Validators.pattern(
          /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/
        ),
      ],
    });
  }

  ngOnInit(): void {}

  get firstName(): FormControl {
    return this.signInForm.get('firstName') as FormControl;
  }

  get lastName(): FormControl {
    return this.signInForm.get('lastName') as FormControl;
  }

  get userName(): FormControl {
    return this.signInForm.get('username') as FormControl;
  }

  get zipName(): FormControl {
    return this.signInForm.get('zip') as FormControl;
  }

  get password(): FormControl {
    return this.signInForm.get('password') as FormControl;
  }

  onSubmit(): void {
    console.log('submitted');
  }
}
