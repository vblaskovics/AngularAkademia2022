import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  constructor(fb: FormBuilder) {
    this.signUpForm = fb.group({
      firstName: [
        '',
        [
          Validators.pattern(/^[A-ZÁÉÓŐÚŰ][a-záéóőúű]+$/),
          Validators.minLength(2),
        ],
      ],
      lastName: [
        '',
        [
          Validators.pattern(/^[A-ZÁÉÓŐÚŰ][a-záéóőúű]+$/),
          Validators.minLength(2),
        ],
      ],
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.pattern(/^[a-z0-9]+$/),
        ],
        ///.*(?=.*[@])/.test('dsadsadsadsaAad@sadsad')
      ],
      zip: [
        '',
        [
          Validators.min(1000),
          Validators.max(9999),
          Validators.pattern(/^[0-9]+$/),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(/^.*(?=.*[#@.*])/),
        ],
      ],
      passwordre: ['', []],
    });
    this.signUpForm.valueChanges.subscribe(() => {
      this.validatePasswords();
    });
  }

  get firstName(): FormControl {
    return this.signUpForm.get('firstName') as FormControl;
  }
  get lastName(): FormControl {
    return this.signUpForm.get('lastName') as FormControl;
  }
  get username(): FormControl {
    return this.signUpForm.get('username') as FormControl;
  }
  get zip(): FormControl {
    return this.signUpForm.get('zip') as FormControl;
  }
  get password(): FormControl {
    return this.signUpForm.get('password') as FormControl;
  }
  get passwordre(): FormControl {
    return this.signUpForm.get('passwordre') as FormControl;
  }
  ngOnInit(): void {}
  submitingForm() {
    if (this.signUpForm.valid) {
      alert('signed up');
    } else {
      this.signUpForm.markAllAsTouched();
    }
  }
  validatePasswords() {
    if (this.password.value !== this.passwordre.value) {
      this.passwordre.setErrors({ invalidPassword: true });
    } else {
      this.passwordre.setErrors(null);
    }
  }
}
