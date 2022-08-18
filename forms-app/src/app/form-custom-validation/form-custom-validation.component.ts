import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

const generateErrorMsg: any = {
  required: (p: any) => 'This field is required!',
  min: (p: any) => `Must be ${p.min} characters long!`,
  invalidParity: (p: any) => 'Invalid parity!',
};

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
      username: ['', [Validators.required, Validators.min(4), evenValidator]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      passwordre: ['', []],
    });

    this.myForm.valueChanges.subscribe(() => {
      this.validatePasswords();
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    console.log('form value', this.myForm.value);
  }

  validatePasswords() {
    let password = this.myForm.get('password') as FormControl;
    let passwordre = this.myForm.get('passwordre') as FormControl;

    if (password.value !== passwordre.value) {
      passwordre.setErrors({ invalidPassword: true });
    } else {
      passwordre.setErrors(null);
    }
  }

  getErrorMessages(fc: FormControl): string[] {
    let messages: string[] = [];

    for (let errorName in fc.errors) {
      let errorParam = fc.errors[errorName];
      let errorMsg = generateErrorMsg[errorName](errorParam);

      messages.push(errorMsg);
    }

    return messages;
  }

  get username(): FormControl {
    return this.myForm.get('username') as FormControl;
  }
}
