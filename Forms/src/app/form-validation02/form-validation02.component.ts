import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form-validation02',
  templateUrl: './form-validation02.component.html',
  styleUrls: ['./form-validation02.component.css'],
})
export class FormValidation02Component implements OnInit {
  myForm: FormGroup;
  // formUsername: FormControl | null ;
  // formEmail: FormControl | null;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      userID: [
        '',
        [
          Validators.required,
          Validators.min(1),
          Validators.max(9999),
          Validators.pattern(/^A.*!$/),
        ],
      ],
    });
  }

  ngOnInit(): void {}

  get userID(): FormControl {
    return this.myForm.get('userID') as FormControl;
  }

  onSubmit(): void {
    // debugger;
    // console.log(this.userID);
    // console.log(this.userID.status);
    if (this.myForm.valid) {
      console.log(this.myForm.value);
    } else {
      this.myForm.markAllAsTouched();
    }
  }
}
