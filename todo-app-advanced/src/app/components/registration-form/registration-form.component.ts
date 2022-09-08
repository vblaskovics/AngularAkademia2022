import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RegistrationModel } from './model/user-registration-form.model';
import { RegistrationForm } from './registration.form';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  public myForms: FormGroup<RegistrationModel> = new RegistrationForm();

  constructor() {

   }
   get FirstName(): FormControl{
    return this.myForms.get('FirstName') as FormControl;
   }
   get LastName(): FormControl{
    return this.myForms.get('LastName') as FormControl;
   }
   get ZipCode(): FormControl{
    return this.myForms.get('ZipCode') as FormControl;
   }
   get Password(): FormControl{
    return this.myForms.get('Password') as FormControl;
   }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.Password.errors)
  }
}
