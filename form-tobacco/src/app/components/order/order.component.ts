import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  myForm: FormGroup;
  typesOfPackages: any = ['S', 'M', 'L', 'XL'];
  packageSizes: any =
    {
    S: ['10', '20'],
    M: ['50', '100'],
    L: ['500', '800'],
    XL: ['2000']
  }
;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      name: [
        '',
        [Validators.required, Validators.pattern(/^[A-ZÁ-Ű][a-zá-ű]{1,20}/)],
      ],
      address: ['',
      [Validators.required, Validators.pattern(/^[a-zá-űA-ZÁ-Ű0-9]{1,20}/)],
    ],
      birthDate: [Date, Validators.required,],
      packageTypes: [''],
      package: [''],
      billingAddress: [''],
      terms: [Boolean, Validators.required,],
    });
  }

  ngOnInit(): void {}

  get name() {
    return this.myForm.get('name');
  }

  get address() {
    return this.myForm.get('address');
  }

  get birthDate() {
    return this.myForm.get('birthDate');
  }

  get packageTypes() {
    return this.myForm.get('packageTypes');
  }

  get package() {
    return this.myForm.get('package');
  }

  get billingAddress() {
    return this.myForm.get('billingAddress');
  }

  get terms() {
    return this.myForm.get('terms');
  }

  objectKeys(obj: any) {
    return Object.keys(obj);
  }

  objectValues(obj: any): any {
    console.log('entries:', Object.entries(obj));
    console.log('keys:', Object.keys(obj));
    console.log('values:', Object.values(obj));
    return Object.entries(obj);
  }

  changeType(e: any) {
    this.packageTypes?.setValue(e.target.value);
  }

  changeSize(e: any) {
    this.package?.setValue(e.target.value);
  }

  onSubmit(): void {
    console.log('Sikeres vásárlás:', this.package);
  }
}

// packageSizes: any = [
//   { t: 'S', value: ['10', '20'],},
//   { t: 'M', value: ['50', '100'],},
//   { t: 'L', value: ['500', '800'],},
//   { t: 'XL', value: ['2000'],},
// ];
