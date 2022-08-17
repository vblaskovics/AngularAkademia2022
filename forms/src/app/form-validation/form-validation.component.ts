import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})
export class FormValidationComponent implements OnInit {
  myForms: FormGroup;
  emailInvalid: boolean = false;
  emailValid: boolean = false;
  usernameInvalid: boolean = false;
  usernameValid: boolean = false;
  constructor(fb: FormBuilder) {
    this.myForms = fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required]
    })
   }

  ngOnInit(): void {
  }


  onSubmit(){
    console.log(this.myForms.get('username')?.valid)
    console.log(this.myForms.get('email')?.valid)
    if(this.myForms.get('username')?.valid && this.myForms.get('email')?.valid){
      this.emailInvalid = false;
      this.usernameInvalid = false;
      this.emailValid = true;
      this.usernameValid = true;
    }

    else if(this.myForms.get('username')?.valid && this.myForms.get('email')?.valid === false){
      this.usernameValid = true
      this.usernameInvalid = false;
    }
    else{
      this.usernameInvalid = true
      this.usernameValid = false;
    }

    if(this.myForms.get('username')?.valid === false && this.myForms.get('email')?.valid ){
      this.emailValid = true
      this.emailInvalid = false;
    }
    else{
      this.emailInvalid = true;
      this.emailValid =false;
    }


  }

}
