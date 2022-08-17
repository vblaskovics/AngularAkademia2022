import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})
export class FormValidationComponent implements OnInit {
  myForm: FormGroup;
  submitted: boolean = false;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
   }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.submitted = true;
    if(this.myForm.invalid) {
      return;
    }
    console.log(this.myForm.value['username'], this.myForm.value['email']);
  }

  get form() {
    return this.myForm.controls;
  }

}
