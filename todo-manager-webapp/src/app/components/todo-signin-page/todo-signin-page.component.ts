import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-todo-signin-page',
  templateUrl: './todo-signin-page.component.html',
  styleUrls: ['./todo-signin-page.component.css'],
})
export class TodoSigninPageComponent implements OnInit {
  myForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(20),
          Validators.pattern(/^[A-Za-z]/),
        ],
      ],
      firstName: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(20),
          Validators.pattern(/^[A-Z].*[a-z]/),
        ],
      ],
      lastName: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(20),
          Validators.pattern(/^[A-Z].*[a-z]/),
        ],
      ],
      zipNumber: ['', [Validators.min(1000), Validators.max(9999)]], //1000--9999
      password: [
        //min 8, legyen benne #@.*
        '',
        [
          Validators.required,
          Validators.pattern(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,12}$/
          ),
          Validators.minLength(8),
          Validators.maxLength(12),
        ],
      ],
      confirmPassword: [''],
    });

    this.myForm.valueChanges.subscribe(() => {
      this.validatePasswords();
    });
  }

  ngOnInit(): void {}

  get username(): FormControl {
    return this.myForm.get('username') as FormControl;
  }
  get firstName(): FormControl {
    return this.myForm.get('firstName') as FormControl;
  }
  get lastName(): FormControl {
    return this.myForm.get('lastName') as FormControl;
  }
  get zipNumber(): FormControl {
    return this.myForm.get('zipNumber') as FormControl;
  }
  get password(): FormControl {
    return this.myForm.get('password') as FormControl;
  }
  get confirmPassword(): FormControl {
    return this.myForm.get('confirmPassword') as FormControl;
  }

  onSubmit(): void {
    console.log('username', this.myForm.get('username'));
  }

  validatePasswords() {
    if (this.password.value !== this.confirmPassword.value) {
      this.confirmPassword.setErrors({ invalidPassword: true });
    } else {
      this.confirmPassword.setErrors(null);
    }
  }
}
