import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

// Age validator for FormControl element
// function ageValidator(control: FormControl): { [s: string]: boolean } {
//   let myAge = (new Date().getTime() - Date.parse(control.value)) / 31536000000;
//   console.log(myAge);

//   if (myAge < 18) {
//     return { tooYoung: true };
//   }
//   return {};
// }

function calculateAge(birthday: Date) {
  let ageDifMs = Date.now() - birthday.getTime();
  let ageDate = new Date(ageDifMs);
  return ageDate.getUTCFullYear() - 1970;
}

function validateAgeRestriction(group: AbstractControl): {
  [s: string]: boolean;
} {
  let birthdate = new Date(group.get('birthDate')?.value);
  let age = calculateAge(birthdate);
  console.log(age);
  if (age < 18) {
    return { ageRestrictionError: true };
  }
  return {};
}

function validateBillingAddress(group: AbstractControl): {
  [s: string]: boolean;
} {
  if (
    group.get('package')?.value > 200 &&
    group.get('billingAddress')?.value.length === 0
  ) {
    return { requiredBillingAddress: true };
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
    this.myForm = fb.group(
      {
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
        birthDate: ['', [Validators.required]],
        terms: ['', [Validators.required]],
        package: ['', [Validators.required]],
        s: [''],
        m: [''],
        l: [''],
        xl: [''],
        billingAddress: [''],
      },
      // GroupForm-Validators (AbstractControl)
      { validators: [validateAgeRestriction, validateBillingAddress] }
    );
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
  get package(): FormControl {
    return this.myForm.get('package') as FormControl;
  }

  onSubmit(): void {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
    } else {
      this.myForm.markAllAsTouched();
    }
  }

  isPackageTypeOn(name: string): boolean {
    return this.myForm.get(name)?.value;
  }

  get packageSelects(): any[] {
    return [
      { type: 's', count: 10 },
      { type: 's', count: 20 },
      { type: 'm', count: 50 },
      { type: 'm', count: 100 },
      { type: 'l', count: 500 },
      { type: 'l', count: 800 },
      { type: 'xl', count: 2000 },
    ].filter(
      (i) =>
        (this.isPackageTypeOn('s') && i.type === 's') ||
        (this.isPackageTypeOn('m') && i.type === 'm') ||
        (this.isPackageTypeOn('l') && i.type === 'l') ||
        (this.isPackageTypeOn('xl') && i.type === 'xl')
    );
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
