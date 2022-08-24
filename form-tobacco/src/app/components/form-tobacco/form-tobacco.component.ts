import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

function ageValidator(control: FormControl): { [s: string]: boolean } {
  let myAge = (new Date().getTime() - Date.parse(control.value)) / 31536000000;
  console.log(myAge);

  if (myAge < 18) {
    return { tooYoung: true };
  }
  return {};
}

@Component({
  selector: 'app-form-tobacco',
  templateUrl: './form-tobacco.component.html',
  styleUrls: ['./form-tobacco.component.css'],
})
export class FormTobaccoComponent implements OnInit {
  myForm: FormGroup;
  date: string;

  constructor(fb: FormBuilder) {
    this.date = '';
    this.myForm = fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(30),
          Validators.pattern(
            /^[A-ZÓŐÚÉÁŰÍ][a-zA-ZőŐúÚéÉáÁűŰíÍ]{3,}(?: [A-ZÓŐÚÉÁŰÍ][a-zA-ZóÓőŐúÚéÉáÁűŰíÍ]*){0,2}$/
          ),
        ],
      ],
      address: ['', [Validators.required]],
      birthDate: ['', [Validators.required, ageValidator]],
      terms: ['', [Validators.required]],
      packageType: [''],
    });
  }

  ngOnInit(): void {
    this.date = new Date().toISOString().slice(0, 10);
  }

  get name(): FormControl {
    return this.myForm.get('name') as FormControl;
  }
  get address(): FormControl {
    return this.myForm.get('address') as FormControl;
  }
  get birthDate(): FormControl {
    return this.myForm.get('birthDate') as FormControl;
  }
  get terms(): FormControl {
    return this.myForm.get('terms') as FormControl;
  }
  get packageType(): FormControl {
    return this.myForm.get('packageType') as FormControl;
  }

  onSubmit(): void {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
    } else {
      this.myForm.markAllAsTouched();
    }
  }

  // console.log(this.birthDay);

  // let myBirthday = Date.parse(this.birthDay);
  // let currentDate = new Date();
  // console.log(myBirthday);

  // let myAge = (currentDate.getTime() - myBirthday) / 31536000000;
  // console.log(myAge);
  // console.log(myAge < 18);

  // if (myAge < 18) {
  //   return true;
  // } else {
  //   return false;
  // }
}
