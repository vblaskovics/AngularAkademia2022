import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})
export class FormValidationComponent implements OnInit {

  myForm: FormGroup;
  isUserNameValid?: boolean;
  isUserNameTouched: boolean;
  isEmailValid?: boolean;
  isEmailTouched: boolean;
  successSubmit: boolean;

  constructor(fb: FormBuilder) { 
    this.myForm = fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required]
    })
    this.successSubmit = true;
    this.isUserNameTouched = false;
    this.isEmailTouched = false;
  }

  ngOnInit(): void {
  }

  onSubmit():void{
    if(this.myForm.valid){
      this.isEmailValid = true;
      this.isUserNameValid = true;
      console.log("successful submit!")
    } else {
      console.log("Try again!")
    }
  }
}
