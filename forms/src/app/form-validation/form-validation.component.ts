import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

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
  onSubmit() {
    if (!this.myForm.valid) {
      this.myForm.markAllAsTouched();
      console.log(this.myForm);
    } else {
      console.log(this.myForm.value);
    }
  }
  /*  validation(key: string) {
    let inputField = this.myForm.get(key);
    return inputField?.touched && !inputField?.valid;
  } */
  validation(key: string) {
    let inputField = this.myForm.get(key);
    //console.log(inputField);
    return inputField?.touched && !inputField?.valid;
  }
}
