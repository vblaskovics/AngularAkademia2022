import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  myForms: FormGroup;

  constructor(fb: FormBuilder) {
    this.myForms = fb.group({
      FirstName: ['',Validators.pattern(/^[A-Z][a-z]+/)],
      LastName: ['',Validators.pattern(/^[A-Z][a-z]+/)],
      Username: ['',[Validators.required, Validators.pattern(/[a-zá-ű0-9]+/), Validators.minLength(4)]],
      ZipCode: ['', [Validators.min(1000), Validators.max(9999)]],
      Password: ['',[Validators.required, Validators.minLength(8), Validators.pattern(/[#&@!.*;]/)]]
    })
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

  }
}
