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
      username: ['Default username'],
      email: ['default@default.com']
    })
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log('username', this.myForm.value)
  }

  onClickMyFormValue() :void{
    console.log('username', this.myForm.value)
  }

  ereaseForm(): void{
    this.myForm.reset()
  }

  getEmail(): void{
    console.log(this.myForm.get('email')?.value)
  }

  resetForm(): void{
    this.myForm.reset({
      'username': 'Peter',
      'email' : 'peter@gmail.com'
    })
  }

  setForm(): void {
    this.myForm.setValue({
      'username': 'Peter',
      'email' : 'peter@gmail.com'
    })
  }

  // resetForm és a setForm közötti különbség az különbség, hogy a reset vissazállítja a 'pristine'-t (kezdőérték)

  patchValue(): void {
    this.myForm.patchValue({
      'username': 'Adam'
    })
  }

}
