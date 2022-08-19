import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})
export class FormValidationComponent implements OnInit {
  myForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      username: ['', Validators.required], // első értéke default, második várja a validátort - status valid/invalid
      email: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  get username() {
    return this.myForm.get('username');
  }

  get email() {
    return this.myForm.get('email');
  }

  onSubmit(): void {
    if(!this.myForm.valid) {
      alert('The form is invalid.')
    }
    console.log(this.username?.status);
    console.log(this.email?.status);
    console.log(this.myForm.status);
    console.log(this.myForm.value);
  }



}
