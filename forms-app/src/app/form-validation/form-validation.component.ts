import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css'],
})
export class FormValidationComponent implements OnInit {
  myForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (
      this.myForm.get('username')?.invalid &&
      this.myForm.get('email')?.invalid
    ) {
    }
  }

  fromGroupCheck(): void {}

  formControllerUsernameCheck(): boolean {
    let status: boolean = false;
    if (
      this.myForm.get('username')?.invalid &&
      this.myForm.get('username')?.touched
    ) {
      status = true;
    }
    return status;
  }
  formControllerEmailCheck(): boolean {
    let status: boolean = false;
    if (
      this.myForm.get('email')?.invalid &&
      this.myForm.get('email')?.touched
    ) {
      status = true;
    }
    return status;
  }
}
