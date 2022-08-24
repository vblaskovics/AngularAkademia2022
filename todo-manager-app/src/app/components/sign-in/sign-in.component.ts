import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  typeOfInvalid?: string;

  myForm: FormGroup;
  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      firstName: ['', [Validators.pattern(/^[A-Za-z]+$/)]],
      lastName: ['', [Validators.pattern(/^[A-Za-z]+$/)]],
      userName: ['', [Validators.required, Validators.pattern(/^[a-z0-9]+$/), Validators.minLength(4)]],
      zip: ['', [Validators.pattern(/^[0-9]{4}$/), Validators.min(1000), Validators.max(9999)]],
      birthDate: ['', [Validators.pattern(/(0[1-9]|1[0-9]|2[0-9]|3[01]).(0[1-9]|1[012]).([19]{2})?([1-9]{2})$/)]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^.*(?=.*[#@.*])/)]],
    })
   }

  ngOnInit(): void {
  }

  get firstName() : FormControl {
    return this.myForm.get('firstName') as FormControl;
  }

  get lastName() : FormControl {
    return this.myForm.get('lastName') as FormControl;
  }
  
  get username() : FormControl {
    return this.myForm.get('userName') as FormControl;
  }
  
  get zip() : FormControl {
    return this.myForm.get('zip') as FormControl;
  }

  get birthDate() : FormControl {
    return this.myForm.get('birthDate') as FormControl;
  }

  get password() : FormControl {
    return this.myForm.get('password') as FormControl;
  }

  onSubmit(): void{
    if(this.myForm.valid){
      console.log(this.myForm.value)
    } else {
      this.myForm.markAllAsTouched()
    }
  }
}
