import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.css'],
})
export class FormReactiveComponent implements OnInit {
  myForm: FormGroup;
  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      username: ['asd'],
      email: [''],
    });
  }

  ngOnInit(): void {}
  onSubmit() {
    console.table(this.myForm.value);
  }
  onClickMyFormValue() {
    console.table(this.myForm.value);
  }
  onEreaseForm() {
    this.myForm.reset();
  }
  onGetEmail() {
    console.table(this.myForm.get('email'));
  }
  onReset2() {
    this.myForm.reset({
      username: 'peter',
      email: 'email',
    });
  }
  setForm() {
    this.myForm.setValue({
      username: 'feri',
      email: 'sadsadsadwqpdnwqp',
    });
  }
  patchValue() {
    this.myForm.patchValue({
      username: 'patching',
      email: 'email',
    });
  }
}
