import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-signin-page',
  templateUrl: './todo-signin-page.component.html',
  styleUrls: ['./todo-signin-page.component.css'],
})
export class TodoSigninPageComponent implements OnInit {
  myForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      firstName: [
        '',
        [
          Validators.minLength(5),
          Validators.maxLength(10),
          Validators.pattern(/^[A-Z].*[a-z]/),
        ],
      ],
      lastName: [
        '',
        [
          Validators.minLength(5),
          Validators.maxLength(10),
          Validators.pattern(/^[A-Z].*[a-z]/),
        ],
      ],
      userName: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(10),
          Validators.pattern(/^[A-Za-Z].*[a-z]/),
        ],
      ],
      zipNumber: [''], //1000--9999
      password: [''], //min 8, legyen benne #@.*
    });
  }

  ngOnInit(): void {}
}
