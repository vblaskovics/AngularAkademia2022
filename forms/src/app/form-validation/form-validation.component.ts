import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
<<<<<<< HEAD
=======
import { retry } from 'rxjs';
>>>>>>> 7d99ba94b13527368e1a2a93686137e8203437a4

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
<<<<<<< HEAD
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
    this.myForm.markAllAsTouched();
    if (this.myForm.status === 'VALID') {
      console.log(this.myForm.value);
    } else {
      console.log('Invalid form');
    }
  }
=======
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

>>>>>>> 7d99ba94b13527368e1a2a93686137e8203437a4
}
