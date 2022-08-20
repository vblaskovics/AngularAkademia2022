import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.css'],
})
export class SignInFormComponent implements OnInit {
  myForm: FormGroup;
  submitted: boolean = false;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      username: ['', [Validators.minLength(4), Validators.pattern(/a-z0-9/)]], //lowercase and numbers only
      zip: ['', [Validators.min(1000), Validators.max(9999)]],
      password: [
        '',
        [Validators.minLength(8), Validators.pattern(/(?=.*[@.*#])/)],
      ], //must contains at least one of the following: ., #, @, *
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    this.submitted = true;
  }

  get form() {
    return this.myForm.controls;
  }

  get firstName() {
    return this.myForm.get('firstname') as FormControl;
  }

  get lastName() {
    return this.myForm.get('lastname') as FormControl;
  }

  get userName() {
    return this.myForm.get('username') as FormControl;
  }

  get zip() {
    return this.myForm.get('zip') as FormControl;
  }

  get password() {
    return this.myForm.get('password') as FormControl;
  }
}
