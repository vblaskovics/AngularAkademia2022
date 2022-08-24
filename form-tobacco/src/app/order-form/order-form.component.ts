import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

function ageValidator(control: FormControl): { [s: string]: boolean } {
  let currentDate = new Date().getTime();
  let differenceInMilliseconds = currentDate - Date.parse(control.value);
  let userAge = differenceInMilliseconds / 31536000000;

  if (userAge < 18) {
    return { invalidAge: true };
  }
  return {};
}

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css'],
})
export class OrderFormComponent implements OnInit {
  orderForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.orderForm = fb.group({
      name: [
        '',
        [Validators.required, Validators.pattern(/^[a-zA-Z -.]{3,}$/)],
      ],
      address: ['', [Validators.required, Validators.minLength(10)]],
      birthDate: ['', [Validators.required, ageValidator]],
      agreeTerms: [false, Validators.requiredTrue],
      sizeS: [false],
      sizeM: [false],
      sizeL: [false],
      sizeXL: [false],
      billingAddress: ['', [Validators.required, Validators.minLength(10)]],
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

  get agreeTerms(): FormControl {
    return this.orderForm.get('agreeTerms') as FormControl;
  }

  get sizeS(): FormControl {
    return this.orderForm.get('sizeS') as FormControl;
  }

  get sizeM(): FormControl {
    return this.orderForm.get('sizeM') as FormControl;
  }

  get sizeL(): FormControl {
    return this.orderForm.get('sizeL') as FormControl;
  }

  get sizeXL(): FormControl {
    return this.orderForm.get('sizeXL') as FormControl;
  }

  onSubmit(): void {
    console.log(this.orderForm);
  }
}
