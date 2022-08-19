import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


function eventValidator(control: FormControl): { [s: string]: boolean }   {
  if (control.value % 2 !== 0) {
    return { invalidParity: true }
  }

  return {

  };
}

@Component({
  selector: 'app-form-custom-validation',
  templateUrl: './form-custom-validation.component.html',
  styleUrls: ['./form-custom-validation.component.css']
})
export class FormCustomValidationComponent implements OnInit {
  myForms: FormGroup;
  constructor(fb: FormBuilder) {
    this.myForms = fb.group({
      username: ['', eventValidator],
      password: ['', [Validators.required, Validators.minLength(4)]],
      passwordRe: [''],
    });
    this.myForms.valueChanges.subscribe(() => {
      this.validatePasswords();
    })
   }

   get username():FormControl{
    return this.myForms.get('username') as FormControl;
   }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.username.status)
  }

  validatePasswords(){
    let password = this.myForms.get('password') as FormControl;
    let passwordre = this.myForms.get('passwordRe') as FormControl;

    if(passwordre.value !== password.value){
      passwordre.setErrors({'invalidPassword': true});
    }
  }
}
