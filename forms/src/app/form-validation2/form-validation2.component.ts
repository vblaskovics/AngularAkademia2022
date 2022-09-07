import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
=======
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { max, min } from 'rxjs';
>>>>>>> 7d99ba94b13527368e1a2a93686137e8203437a4

@Component({
  selector: 'app-form-validation2',
  templateUrl: './form-validation2.component.html',
<<<<<<< HEAD
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
    debugger
    if (this.myForm.valid) {
      console.log(this.myForm.value);
    } else {
      this.myForm.markAllAsTouched();
    }
  }
}
=======
  styleUrls: ['./form-validation2.component.css']
})
export class FormValidation2Component implements OnInit {

    myForms: FormGroup;
  constructor(fb: FormBuilder){
    this.myForms = fb.group({
      userId: ['',[Validators.required, Validators.min(0), Validators.max(9999),Validators.pattern(/^[A-Z].*!$/)]]
    });
  }

  get userId():FormControl{
    return this.myForms.get('userId') as FormControl;
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.myForms.valid){
      console.log(this.myForms.value)
    }else {
      this.myForms.markAllAsTouched();
    }
    console.log(this.userId.errors);

  }
}
//string regexp: nagybetűvel kezdődik és felkijáátóó
>>>>>>> 7d99ba94b13527368e1a2a93686137e8203437a4
