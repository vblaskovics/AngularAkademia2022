import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { retry } from 'rxjs';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})
export class FormValidationComponent implements OnInit {
  myForms: FormGroup;
  isValid: boolean = false;
  disabled: boolean = true;
  formIsInvalid: boolean = false;
  constructor(fb: FormBuilder) {
    this.myForms = fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required]
    })
   }

  ngOnInit(): void {
  }


  onSubmit(){
    if(this.myForms.status === 'VALID'){
      this.isValid =  true;
      this.formIsInvalid = false;
    }
    else if(this.myForms.status === 'INVALID'){
      this.formIsInvalid = true;
      this.isValid = false;
    }

  }

}
