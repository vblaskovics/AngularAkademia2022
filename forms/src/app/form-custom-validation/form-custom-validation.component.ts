import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

function evenValidator(control: FormControl): { [s: string]: boolean } {
  if (control.value % 2 !== 0) {
    return { invalidParity: true };
  }
  return {};
}

@Component({
  selector: 'app-form-custom-validation',
  templateUrl: './form-custom-validation.component.html',
  styleUrls: ['./form-custom-validation.component.css'],
})
export class FormCustomValidationComponent implements OnInit {
  myForm: FormGroup;
  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      username: ['', [evenValidator]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      passwordre: ['', []],
    });
    this.myForm.valueChanges.subscribe(() => {
      this.validatePasswords();
    });
  }
  get username() {
    return this.myForm.get('username');
  }
  get password() {
    return this.myForm.get('password');
  }
  get passwordre() {
    return this.myForm.get('passwordre');
  }
  ngOnInit(): void {}
  onSubmit() {
    console.log(this.myForm.value);
  }
  validatePasswords() {
    if (this.password?.value !== this.passwordre?.value) {
      this.passwordre?.setErrors({ invalidPassword: true });
    } else {
      this.passwordre?.setErrors(null);
    }
  }
}
