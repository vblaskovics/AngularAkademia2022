import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


//custom validátor:

function evenValidator(control: FormControl): {[s:string]: boolean} {
   if(control.value % 2 !== 0){
    return { invalidParity : true }
   }
   return {};
    //return {}; //ha üresen hagyjuk, nincsen hiba
}

@Component({
  selector: 'app-form-customvalidation',
  templateUrl: './form-customvalidation.component.html',
  styleUrls: ['./form-customvalidation.component.css']
})
export class FormCustomvalidationComponent implements OnInit {
  myForm: FormGroup;


  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      username: ['', [Validators.required, evenValidator, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      passwordRe: ['', []]
    });

    this.myForm.valueChanges.subscribe(()=> {
      this.validatePasswords();
    })
  }

  ngOnInit(): void {}

  get username(): FormControl {
    return this.myForm.get('username') as FormControl;
  }

  onSubmit(): void {
    // debugger;
  console.log(this.myForm.value);
    
  }


  validatePasswords(){
    let password = this.myForm.get('password') as FormControl;
    let passwordRe = this.myForm.get('passwordRe') as FormControl;

    if(password.value !== passwordRe.value){
      passwordRe.setErrors({'invalidPassword': true});
    }
      else {
        passwordRe.setErrors(null);
      }
  }
}


