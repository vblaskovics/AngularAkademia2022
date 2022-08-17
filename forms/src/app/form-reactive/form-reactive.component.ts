import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.css']
})
export class FormReactiveComponent implements OnInit {
  myForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      username: ['Will'], // tömb első eleme a default értéke a formnak
      email: ['will@smith.com'],
    });
  }

  ngOnInit(): void {
  }

  onSubmit():void {
    console.log('form value:', this.myForm.value)
  }

  onClickMyFormValue():void {
    console.log('form value:', this.myForm.value)
  }

  erase(): void {
    this.myForm.reset();
  }

  getEmail(): void {
    console.log(this.myForm.get('email')?.value);
    console.log(this.myForm.get('email')); // így egy formControl lesz
  }

  resetForm(): void {
    this.myForm.reset({
      username: 'Joe',
      email: 'j@s.hu'
    }) // beállítja ezekre az értékekre az egész formot
  }

  setForm(): void {
    this.myForm.setValue({
      username: 'Joe',
      email: 'j@s.hu'
    }) // beállítja ezekre az értékekre az egész formot
  }

  patchValue(): void {
    this.myForm.patchValue({
      username: 'Joe',
    }); // az egyes formControl értékét állítja be
  }

}
