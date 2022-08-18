import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';


function evenValidator(control: FormControl): { [s:string]: boolean } {
  if (control.value % 2 !==0 ) {
  return { InvalidParity: true }
}
  return {};
}

@Component({
  selector: 'app-form-custom-validation',
  templateUrl: './form-custom-validation.component.html',
  styleUrls: ['./form-custom-validation.component.css']
})
export class FormCustomValidationComponent implements OnInit {
  myForm: FormGroup


  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      username: ['', Validators.required, evenValidator, ],
      // evenValidator
      password: ['', [Validators.required, Validators.minLength(4), ]],
      passwordre: ['', []],

    });

    this.myForm.valueChanges.subscribe(() => {
      // console.log(this.myForm.value)
      this.validatePassword();
    });
  }
  ngOnInit(): void {}

  onSubmit(): void {
    console.log('form-control', this.myForm)
    this.myForm.markAllAsTouched();

    }

    validatePassword() {
      let password = this.myForm.get('password') as FormControl;
      let passwordre = this.myForm.get('passwordre') as FormControl;

      if (password.value !== passwordre.value) {
          passwordre.setErrors({'invalidPassword': true});
        }  else  {
            passwordre.setErrors(null);
          }
      }

    }

