import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.css'],
})
export class FormReactiveComponent implements OnInit {
  myForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      username: ['Will'],
      email: ['will@smith.com'],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    console.log('form value', this.myForm.value);
  }

  onClickMyFormValue(): void {
    console.log('myform value', this.myForm.value);
  }

  erease(): void {
    this.myForm.reset();
  }

  getEmail(): void {
    console.log(this.myForm.get('email'));
  }

  resetForm(): void {
    this.myForm.reset({
      username: 'Peter',
      email: 'peter@gmail.com',
    });
  }

  setForm(): void {
    this.myForm.setValue({
      username: 'Peter',
      email: 'peter@gmail.com',
    });
  }

  patchValue(): void {
    this.myForm.patchValue({
      username: 'John',
    });
  }
}
