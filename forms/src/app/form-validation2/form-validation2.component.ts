import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { max, min } from 'rxjs';

@Component({
  selector: 'app-form-validation2',
  templateUrl: './form-validation2.component.html',
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
