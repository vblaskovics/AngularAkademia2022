import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-todo-navbar-form',
  templateUrl: './todo-navbar-form.component.html',
  styleUrls: ['./todo-navbar-form.component.css'],
})
export class TodoNavbarFormComponent implements OnInit {
  myForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      title: [''],
    });
  }

  ngOnInit(): void {}

  onClickMyFormValue(): void {
    console.log('myForm value: ', this.myForm.value);
    this.myForm.reset();
  }
}
