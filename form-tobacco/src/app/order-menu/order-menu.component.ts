import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ArrayInterface } from '../array.model';


function customValidator(formControl: AbstractControl) {
  if (!formControl.parent) {
    return null;
  }

  if (formControl.parent.get('btnXLarge')?.value === true || formControl.parent.get('btnLarge')?.value === true) {
    return Validators.required(formControl);
  }
  return null
}

@Component({
  selector: 'app-order-menu',
  templateUrl: './order-menu.component.html',
  styleUrls: ['./order-menu.component.scss'],
})
export class OrderMenuComponent implements OnInit {
  myForm: FormGroup;

  myArray: ArrayInterface[] = [
    {
      Namevalue: "S",
      Value: [10,20]
    },
    {
      Namevalue: "M",
      Value: [50,100]
    },
    {
      Namevalue: "L",
      Value: [500, 800]
    },
    {
      Namevalue: "XL",
      Value: [2000]
    },
  ];
  filteredList?: ArrayInterface[];

  required: boolean = false;

  constructor(fb: FormBuilder) {

    this.myForm = fb.group({
      name: ['', [Validators.required]],
      adress: ['', Validators.required],
      birthdate: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /(Date of birth:|Birthday:)\s+(?:19\d{2}|20[01][0-9]|2020)[-/.](?:0[1-9]|1[012])[-/.](?:0[1-9]|[12][0-9]|3[01])\b/
          ),
        ],
      ],
      termsAndCond: [false, Validators.requiredTrue],
      billingadress: ['', customValidator],
      btnSmall: [false],
      dropdownMenu: [],
    });

    this.myForm.get('btnLarge')?.valueChanges
      .subscribe(value => {
        this.myForm.get('billingadress')?.updateValueAndValidity;
      });

      this.myForm.get('btnXLarge')?.valueChanges
        .subscribe(value => {
          this.myForm.get('billingadress')?.updateValueAndValidity;
        });
  }

  get name(): FormControl {
    return this.myForm.get('name') as FormControl;
  }

  get adress(): FormControl {
    return this.myForm.get('adress') as FormControl;
  }

  get birthdate(): FormControl {
    return this.myForm.get('adress') as FormControl;
  }

  get termsAndCond(): FormControl {
    return this.myForm.get('termsAndCond') as FormControl;
  }

  get btnSmall(): FormControl {
    return this.myForm.get('btnSmall') as FormControl;
  }

  get btnMedium(): FormControl {
    return this.myForm.get('btnMedium') as FormControl;
  }

  get btnLarge(): FormControl {
    return this.myForm.get('btnLarge') as FormControl;
  }

  get btnXLarge(): FormControl {
    return this.myForm.get('btnXLarge') as FormControl;
  }

  ngOnInit(): void {

  }

  onChange(s: ArrayInterface,i? : number) {
    if(this.btnSmall.value === true){
      this.filteredList = this.myArray.filter(word => word.Namevalue === s.Namevalue)
    }

    console.log(s)

  }

  onSubmit(item?: any) {
    console.log(this.myForm.get('billingadress'));
    console.log(item)
  }
}
