import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { AbstractControl } from '@angular/forms';

function calculateAge(birthday: Date) {
  let ageDifMs = Date.now() - birthday.getTime();
  let ageDate = new Date(ageDifMs);
  return ageDate.getUTCFullYear() - 1970;
}

function validateAgeRestriction(group: AbstractControl): { [s:string]: boolean } {
  let birthdate = new Date(group.get('birthdate')?.value);
  let age = calculateAge(birthdate);
  console.log(age);
  if (age < 18) {
    return {ageRestrictionError:true}
  }
  return {};
}


@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css'],
})
export class OrderFormComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl(),
    address: new FormControl(),
    birthdate: new FormControl(),
  });

  submitted = true;

  packageData = [
    { id: 1, size: 10},
    { id: 2, size: 20},
    { id: 3, size: 50},
    { id: 4, size: 100},
    { id: 5, size: 500},
    { id: 6, size: 800},
    { id: 7, size: 2000},
  ];
  fb: any;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: ['', Validators.required],
      address: [''],
      birthdate: [''],
    }, { validators: validateAgeRestriction});
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      acceptTerms: [false, Validators.requiredTrue]
  });
  }

  get name() {
    return this.form.get('name');
  }

  get address() {
    return this.form.get('address');
  }
  get birthdate() {
    return this.form.get('date');
  }

  get f() { return this.form.controls; }

  log(x: any) {
    console.log(x);
  }


  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
  }
}

}




// function ageValidator(
//   control: AbstractControl): {
//   [key: string]: boolean } | null {
//   console.log(control.value as number);
//   if (control.value < 18) {
//     return { date: true };
//   }
//   return null;
// }
