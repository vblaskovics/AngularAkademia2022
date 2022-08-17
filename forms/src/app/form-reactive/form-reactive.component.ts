import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.css']
})
export class FormReactiveComponent implements OnInit {

  myUsernames: string[] = [];
  myEmails: string[];
  myForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      username: ['Will'],
      emailaddress: ['will@smith.com']
    });
    this.myEmails = [];
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.myUsernames.push(this.myForm.value.username);
    this.myEmails.push(this.myForm.value.emailaddress);

    this.myForm.reset();
  }

  onClickMyFormValue(): void {
    console.log('form value', this.myForm.value)
  }

  erease(): void {
    this.myForm.reset();
  }

  getUsername(): void {
    console.log(this.myForm.get('username')?.value);
  }

  resetForm(): void {
    this.myForm.reset({
      'username': 'Peter',
      'emailaddress': 'peter@gaymail.com'
    });
  }

  setForm(): void {
    this.myForm.setValue({
      'username': 'Peter',
      'emailaddress': 'peter@gaymail.com'
    });
  }

  patchValue(): void {
    this.myForm.patchValue({
      'username': 'Gabor'
    })
  }

}
