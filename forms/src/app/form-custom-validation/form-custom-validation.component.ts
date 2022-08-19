import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

function evenValidator(control: FormControl): { [s:string] : boolean } {
  if(control.value % 2 !== 0) {
    return { invalidParity: true }
  }
  return {}
}

@Component({
  selector: 'app-form-custom-validation',
  templateUrl: './form-custom-validation.component.html',
  styleUrls: ['./form-custom-validation.component.css']
})
export class FormCustomValidationComponent implements OnInit {

  typeOfInvalid?: string;

  myForm: FormGroup;
  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      username: ['', evenValidator],
      password: ['', [Validators.required, Validators.minLength(4)]],
      passwordre: ['', [Validators.required]],

    })
    this.myForm.valueChanges.subscribe(() => {
      this.validatePasswords()
    })
   }

  ngOnInit(): void {
  }

  get username() : FormControl {
    return this.myForm.get('username') as FormControl;
  }
  get password() : FormControl {
    return this.myForm.get('password') as FormControl;
  }
  get passwordRe() : FormControl {
    return this.myForm.get('passwordre') as FormControl;
  }

  onSubmit(): void{
    if(this.myForm.valid){
      console.log(this.myForm.value)
    } else {
      this.myForm.markAllAsTouched()
    }
  }

  validatePasswords(){

    if(this.password.value !== this.passwordRe.value){
      this.passwordRe.setErrors({
        'invalidPassword':true
      })
    }
  }

}
