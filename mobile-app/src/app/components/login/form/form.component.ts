import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from "@angular/forms"

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      username: ['',[Validators.required]],
      password: ['',[Validators.required]]
    })
  }

  get username(): FormControl {
    return this.form.get('username') as FormControl;
  }

  get password(): FormControl {
    return this.form.get('password') as FormControl;
  }

  ngOnInit(): void {
  }

  onSubmit(){

  }
}
