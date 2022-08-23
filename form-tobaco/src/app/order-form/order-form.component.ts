import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';

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
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {
  myForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      birthdate: [''],
    }, { validators: validateAgeRestriction});
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
}
