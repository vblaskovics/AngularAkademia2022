import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl, Validators } from '@angular/forms';

function calculateAge(birthday: Date) {
  let ageDifMs = Date.now() - birthday.getTime();
  let ageDate = new Date(ageDifMs);
  return ageDate.getUTCFullYear() - 1970;
}

function validateAgeRestriction(group: AbstractControl): {
  [s: string]: boolean;
} {
  let birthdate = new Date(group.get('birthdate')?.value);
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
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css'],
})
export class OrderFormComponent implements OnInit {
  myForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group(
      {
        birthdate: ['', Validators.required],
        s: [''],
        m: [''],
        l: [''],
        xl: [''],
        package: ['', Validators.required],
        billingAddress: [''],
      },
      { validators: [validateAgeRestriction, validateBillingAddress] }
    );
  }

  ngOnInit(): void {}

  onSubmit(): void {
    this.myForm.markAllAsTouched();
    if (this.myForm.status === 'VALID') {
      console.log(this.myForm.value);
    } else {
      console.log('Invalid form');
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
}
