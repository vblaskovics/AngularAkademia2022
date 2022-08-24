import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form-validation2',
  templateUrl: './form-validation2.component.html',
  styleUrls: ['./form-validation2.component.css'],
})
export class FormValidation2Component implements OnInit {
  myForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      userId: [
        '',
        [
          Validators.required,
          Validators.min(0),
          Validators.max(9999),
          Validators.pattern(/^a/),
        ],
      ],
    });
  }

  ngOnInit(): void {}

  get userId(): FormControl {
    return this.myForm.get('userId') as FormControl;
  }

  onSubmit(): void {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
    } else {
      this.myForm.markAllAsTouched();
    }
  }
}
