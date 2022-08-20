import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.css']
})
export class SignInFormComponent implements OnInit {
  myForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      username: ['', [Validators.minLength(4), Validators.pattern(/a-z0-9/)]], //lowercase and numbers only
      zip: ['', [Validators.minLength(1000), Validators.maxLength(9999)]],
      password: ['', [Validators.minLength(8), Validators.pattern(/(?=.*[@.*#])/)]] //must contains at least one of the following: ., #, @, *
    })
  }

  ngOnInit(): void {
  }

}
