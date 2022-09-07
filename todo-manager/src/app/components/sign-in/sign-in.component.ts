import { SignInService } from './../../services/sign-in.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  myForm: FormGroup;

  message = '';

  constructor(fb: FormBuilder, public signInService: SignInService) {
    this.myForm = fb.group({
      firstName: ['', Validators.pattern(/^[A-ZÁ-Ű][a-zá-ű]{1,20}/),],
      lastName: ['', Validators.pattern(/^[A-ZÁ-Ű][a-zá-ű]{1,20}/), ],
      userName: ['',
        [ Validators.required,
          Validators.pattern(/^[a-z0-9]{4,}/), ],
      ],
      zip: ['',  Validators.pattern(/^[1-9][0-9]{3}$/),],
      password: ['',
        [ Validators.required,
          Validators.pattern(/^(?=.*[A-Za-z\d])(?=.*[@\*#\.])[A-Za-z\d@\*#\.]{8,}$/), ],
      ],
    });
  }

  ngOnInit(): void {}

  get firstName() {
    return this.myForm.get('firstName');
  }

  get lastName() {
    return this.myForm.get('lastName');
  }

  get userName(): FormControl {
    return this.myForm.get('userName') as FormControl;
  }

  get zip() {
    return this.myForm.get('zip');
  }

  get password(): FormControl {
    return this.myForm.get('password') as FormControl;
  }

  onSubmit(): void {
    console.log('firstname:', this.firstName?.value);
    console.log('lastname:', this.lastName?.value);
    console.log('username:', this.userName?.value);
    console.log('zip:', this.zip?.value);
    console.log('password:', this.password?.value);

    this.signIn(this.userName.value, this.password.value);
    this.myForm.reset();
  }

  signIn(userName: string, password: string) {
    this.message = '';
    let successSignIn = this.signInService.signIn(userName, password);

    if(!successSignIn) {
      this.message = 'Invalid username or password!';
      setTimeout(() => {
        this.message = '';
      }, 3000);
    }
  }
}
