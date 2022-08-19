import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

function evenValidator(control: FormControl): { [s:string]: boolean} {
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
  myForm: FormGroup;

  constructor(fb: FormBuilder) { this.myForm = fb.group({
    userName: ['', evenValidator],
  password: ['', [Validators.required, Validators.minLength(4)]],
  passwordre: ['', []]
  });

this.myForm.valueChanges.subscribe(() => {
  this.validatePasswords();
})
}

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.myForm.value);
  }

  get userName(): FormControl {
    return this.myForm.get('userName') as FormControl;
  }

  validatePasswords() {
    let password = this.myForm.get('password') as FormControl;
    let passwordre = this.myForm.get('passwordre') as FormControl;

    if(password.value !== passwordre.value) {
      passwordre.setErrors({'invalidPassword': true});
    } else {
      passwordre.setErrors(null);
    }
  }

}
