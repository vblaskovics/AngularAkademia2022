import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-todo-navbar-form',
  templateUrl: './todo-navbar-form.component.html',
  styleUrls: ['./todo-navbar-form.component.css'],
})
export class TodoNavbarFormComponent implements OnInit {
  myForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      title: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(15),
        ],
      ],
    });
  }

  ngOnInit(): void {}

  get titleName(): FormControl {
    return this.myForm.get('title') as FormControl;
  }

  onClickMyFormValue(): void {
    console.log('myForm value: ', this.myForm.value);
    this.myForm.reset();
  }

  onSubmit(): void {
    console.log(this.myForm.value);
    console.log('userId', this.titleName);
  }
}
