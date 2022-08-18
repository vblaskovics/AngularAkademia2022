import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})
export class FormValidationComponent implements OnInit {

  myForm: FormGroup;
  isInvalid: boolean = false;
  buttonValid: boolean = true;


  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      username: ['', Validators.required],
      emailaddress: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.myForm);
  }



}
