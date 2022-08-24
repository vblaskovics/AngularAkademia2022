import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

function evenValidator(control: FormControl): { [s: string]: boolean } {
  debugger;
  if (control.value % 2 !== 0) {
    return { invalidParity: true };
  }
  return {};
}

const generateErrorMsg: any = {
  required: (p: any) => 'This field is required!',
  min: (p: any) => `Must be greater than ${p.min}!`,
  invalidParity: (p: any) => 'Invalid parity!',
};

@Component({
  selector: 'app-form-custom-validation',
  templateUrl: './form-custom-validation.component.html',
  styleUrls: ['./form-custom-validation.component.css'],
})
export class FormCustomValidationComponent implements OnInit {
  myForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      username: ['', [Validators.required, evenValidator, Validators.min(10)]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      passwordre: ['', []],
    });

    this.myForm.valueChanges.subscribe(() => {
      this.validatePasswords();
    });
  }

  get userName(): FormControl {
    return this.myForm.get('username') as FormControl;
  }

  get password(): FormControl {
    return this.myForm.get('password') as FormControl;
  }

  get passwordRe(): FormControl {
    return this.myForm.get('passwordre') as FormControl;
  }

  onSubmit(): void {
    console.log('form value', this.myForm.value);
  }

  validatePasswords() {
    if (this.password.value !== this.passwordRe.value) {
      this.passwordRe.setErrors({ invalidPassword: true });
    } else {
      this.passwordRe.setErrors(null); // kivesszük a hibát, ha jók a jelszavak
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

  ngOnInit(): void {}
}
