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
      username: ['Jóska'],
      email: ['Jóska@gmail.com'],
    });
   }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log('form value', this.myForm.value);
  }

  onClickMyFormValue(): void {
    console.log('myForm value', this.myForm.value);
  }

  erease(): void {
    this.myForm.reset();
  }

  getEmail(): void {
    console.log(this.myForm.get('username'));
  }

  resetForm(): void {
    this.myForm.reset({
      'username': 'Peter',
      'email': 'peter@gmail.com'
    })
  }

  setForm(): void {
    this.myForm.setValue({
      'username': 'Peter',
      'email': 'peter@gmail.com'
    })
  }

patchValue(): void {
  this.myForm.patchValue({
    'username': 'Feri'
  })
}

}
