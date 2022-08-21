import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  myForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      username: ['', [Validators.required, Validators.minLength(4), Validators.pattern(/[a-z]+[0-9]{1,3}/)]],
      zip: [
        '',
        [Validators.required, Validators.min(1000), Validators.max(9999)],
      ],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^[a-zA-Z0-9]+(.*Đ$ß#4?)/)]],
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

  onSubmit() {
    // debugger
    console.log(this.myForm)
  }
}
