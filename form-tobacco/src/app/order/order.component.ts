import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
function validateIfMoreThen18(control: FormControl): { [s: string]: boolean } {
  console.log('validateIfMoreThen18', control);
  let stringSplit = control.value.split('-');
  let year = stringSplit[0];
  let month = stringSplit[1];
  let day = stringSplit[2];
  let maxBirthDate = new Date();
  maxBirthDate.setFullYear(maxBirthDate.getFullYear() - 18);
  if (year < maxBirthDate.getFullYear()) {
    return {};
  }
  if (year == maxBirthDate.getFullYear()) {
    if (month < maxBirthDate.getMonth()) {
      return {};
    }
    if (month == maxBirthDate.getMonth()) {
      if (day <= maxBirthDate.getDay()) {
        return {};
      }
    }
  }
  return { isNotOver18: true };
}
function billingAddressIsRequired(control: FormControl): {
  [s: string]: boolean;
} {
  console.log('billingAddressIsRequired', control);
  let packageValue = control.parent?.get('package')?.value;
  if (packageValue > 200) {
    if (control.value.length > 0) {
      return {};
    } else {
      return { billingAddressIsRequired: true };
    }
  }
  return {};
}
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  orderForm: FormGroup;
  selectedTypes: string[] = [];
  constructor(private fb: FormBuilder) {
    this.orderForm = fb.group({
      name: ['', [Validators.required]],
      address: ['', [Validators.required]],
      birthDate: ['', [Validators.required, validateIfMoreThen18]],
      terms: [false, [Validators.requiredTrue]],
      package: [null, [Validators.required]],
      billingAddress: ['', [billingAddressIsRequired]],
    });
    this.orderForm.get('package')?.valueChanges.subscribe(() => {
      this.orderForm.get('billingAddress')?.updateValueAndValidity();
    });
  }

  ngOnInit(): void {}

  get name(): FormControl {
    return this.orderForm.get('name') as FormControl;
  }
  get address(): FormControl {
    return this.orderForm.get('address') as FormControl;
  }
  get birthDate(): FormControl {
    return this.orderForm.get('birthDate') as FormControl;
  }
  get terms(): FormControl {
    return this.orderForm.get('terms') as FormControl;
  }
  get package(): FormControl {
    return this.orderForm.get('package') as FormControl;
  }
  get billingAddress(): FormControl {
    return this.orderForm.get('billingAddress') as FormControl;
  }
  onSubmit() {
    if (this.orderForm.valid) {
      alert('success');
    } else {
      alert('fail');
    }
    console.log(this.orderForm);
    this.orderForm.markAllAsTouched();
  }
  onHandlePackageType(type: string) {
    if (this.selectedTypes.includes(type)) {
      this.selectedTypes.splice(this.selectedTypes.indexOf(type), 1);
    } else {
      this.selectedTypes.push(type);
    }
  }
}
