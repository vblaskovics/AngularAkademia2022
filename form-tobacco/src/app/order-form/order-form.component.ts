import { Component, OnInit } from '@angular/core';
import {
  Form,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

function ageValidator(control: FormControl): { [s:string]: boolean } {
  let currentDate = new Date().getTime(); //31536000000
  let differenceInMilisec = (currentDate - Date.parse(control.value));
  let userAge = differenceInMilisec / 31536000000

  if(userAge < 18) {
    return { invalidAge: true }
  }
  return {};
}

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss'],
})
export class OrderFormComponent implements OnInit {
  myForm: FormGroup;
  submitted: boolean = false;
  sChecked = false;
  mChecked = false;
  lChecked = false;
  xlChecked = false;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      birthdate: ['', [Validators.required, ageValidator]],
      termsandconditions: [false, Validators.requiredTrue],
      sizeS: [false],
      sizeM: [false],
      sizeL: [false],
      sizeXL: [false],
      billingAddres: ['']
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    this.submitted = true;
  }

  // get form(): FormControl {
  //   return this.myForm.controls;
  // }

  get name(): FormControl {
    return this.myForm.get('name') as FormControl;
  }

  get address(): FormControl {
    return this.myForm.get('address') as FormControl;
  }

  get birthDate(): FormControl {
    return this.myForm.get('birthdate') as FormControl;
  }

  get termsAndConditions(): FormControl {
    return this.myForm.get('termsandconditions') as FormControl;
  }

  get billingAddress(): FormControl {
    return this.myForm.get('billingaddress') as FormControl;
  }

  get sizeS(): boolean {
    return this.sChecked;
  }

  get sizeM(): boolean {
    return this.mChecked;
  }

  get sizeL(): boolean {
    return this.lChecked;
  }

  get sizeXL(): boolean {
    return this.xlChecked;
  }

  tickBox(event: any, size: string): void {
    if(size == 's') {
      this.sChecked = event.target.checked;
    }
    if(size == 'm') {
      this.mChecked = event.target.checked;
    }
    if(size == 'l') {
      this.lChecked = event.target.checked;
    }
    if(size == 'xl') {
      this.xlChecked = event.target.checked;
    }
  }

}
