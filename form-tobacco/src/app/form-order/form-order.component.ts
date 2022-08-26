import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';


//counting the current age and creating a custom validator:

function ageCalculator(dob: Date){
  let ageDiffs = Date.now() - dob.getTime();
  let dateOfAge = new Date(ageDiffs);
  return dateOfAge.getUTCFullYear() - 1970;
}

function ageValidator(fgroup: AbstractControl): {
  [s: string]: boolean;
} {
    let birthdate = new Date(fgroup.get('dob')?.value);
    let age = ageCalculator(birthdate);
    // console.log(age);
    if (age < 18) {
      return { errorByAgeValidatior: true };
    }
    return {};
}

//billing address validator:
function billingAddressValidator(fgroup: AbstractControl): {
  [s: string]: boolean;
} {
  if (
    fgroup.get('package')?.value > 200 &&
    fgroup.get('address')?.value.length === 0
  ) {
    return { errorByBillingAddress: true };
  }
  return {};
}

@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrls: ['./form-order.component.css'],
})
export class FormOrderComponent implements OnInit {
  myForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group(
      {
        name: ['', Validators.required],
        address: ['', Validators.required],
        dob: ['', Validators.required],
        termsAndCons: [false, Validators.requiredTrue],
        s: [''],
        m: [''],
        l: [''],
        xl: [''],
        package: ['', Validators.required],
      },
      { validators: [ageValidator, billingAddressValidator] }
    );
  }

  ngOnInit(): void {}

  get name(): FormControl {
    return this.myForm.get('name') as FormControl;
  }

  get address(): FormControl {
    return this.myForm.get('address') as FormControl;
  }

  get dob(): FormControl {
    return this.myForm.get('dob') as FormControl;
  }

  get termsAndCons(): FormControl {
    return this.myForm.get('termsAndCons') as FormControl;
  }

  onSubmit(): void {
    this.myForm.markAllAsTouched();
    if (this.myForm.status === 'VALID') {
      alert('Sikeres vásárlás!' || this.myForm.value);
    } else {
      alert('Sikertelen vásárlás');
    }
  }


  isPackageTypeOn(name: string): boolean {
    return this.myForm.get(name)?.value;
  }

  get packageOptions(): any[] {
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
  
}
