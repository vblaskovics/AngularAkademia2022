import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  formIsValid: boolean = false;
  userNames: string[] = [];
  passwords: string[] = [];
  myForm: FormGroup;



  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      userName: ['', [Validators.pattern(/^[a-z0-9]+$/), Validators.required, Validators.minLength(4)]],
      firstName: ['', [Validators.pattern(/^[A-Za-z]+$/)]],
      lastName: ['', [Validators.pattern(/^[A-Za-z]+$/)]],
      birthDate: ['', [Validators.pattern(/(0[1-9]|1[0-9]|2[0-9]|3[01]).(0[1-9]|1[012]).([19]{2})?([1-9]{2})$/)]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^.*(?=.*[#@.*])/)]],
      zipCode: ['', [Validators.pattern(/^[0-9]{4}$/), Validators.min(1000), Validators.max(9999)]]
    })
  }

  ngOnInit(): void {
  }

  get userName() {
    return this.myForm.get('userName') as FormControl;
  }

  get firstName() {
    return this.myForm.get('firstName') as FormControl;
  }

  get lastName() {
    return this.myForm.get('lastName') as FormControl;
  }

  get birthDate() {
    return this.myForm.get('birthDate') as FormControl;
  }

  get zipCode() {
    return this.myForm.get('zipCode') as FormControl;
  }

  get password() {
    return this.myForm.get('password') as FormControl;
  }

  formValid(): boolean {
    if (this.myForm.valid) {
      return this.formIsValid = true;
    } else {
      return this.formIsValid = false;
    }
  }

  onSubmit() {
    if (this.myForm.valid) {
      this.userNames.push(this.myForm.value.userName);
      this.passwords.push(this.myForm.value.password);
      this.formIsValid = true;
      this.myForm.reset();
      console.log(this.userNames);
    } else {
      this.myForm.markAllAsTouched();
    }
  }

}
