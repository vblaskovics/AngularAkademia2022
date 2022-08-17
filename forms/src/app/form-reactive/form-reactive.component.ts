import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.css']
})
export class FormReactiveComponent implements OnInit {

  myForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.myForm= fb.group({
      username: ['Will'],
      email: ['skoome@skum.co.eu.gg'],
    });

   }

  ngOnInit(): void {
  }
  onSubmit(): void {
    console.log(this.myForm.value);
  }
  onClickMyFormValue():void{
    console.log(this.myForm.value);
  }
  erase(){
    this.myForm.reset();
  }

  getEmail(){
    console.log(this.myForm.get('email')?.value);
  }

  resetForm(){
    this.myForm.reset({
      'username': 'Peter',
      'email': 'peter@gmail.com'
    });
  }
  setForm(){
    this.myForm.setValue({
      'username': 'Pókmanus',
      'email': 'pókmanus22@gmail.com'
    });
  }
  patchValue(){
    this.myForm.patchValue({
      username: 'Zoli',
    });
  }
}
