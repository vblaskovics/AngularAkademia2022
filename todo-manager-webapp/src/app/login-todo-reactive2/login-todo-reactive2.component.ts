import { Component, OnInit, NgModule } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  AbstractControlOptions,
  AbstractControl
} from '@angular/forms';
import { PasswordValidators } from './password.validators';

@Component({
  selector: 'app-login-todo-reactive2',
  templateUrl: './login-todo-reactive2.component.html',
  styleUrls: ['./login-todo-reactive2.component.css'],
})
export class LoginTodoReactive2Component implements OnInit {
  form: FormGroup;


  constructor(fb: FormBuilder) {
    this.form = fb.group({
        firstName: ['', [Validators.minLength(2)]],
        lastName: ['', [Validators.minLength(2)]],
        userName: [
          '',
          [
            Validators.required,
            Validators.minLength(3),
            Validators.pattern(/^[A-ZÁÉÓŐÚŰa-záéóőúű0-9]+$/),
          ],
        ],
        zip: ['', [Validators.minLength(4), Validators.maxLength(5)]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.pattern(/^.*(?=.*[#@.*])/),
          ],
        ],
        passwordre: ['', Validators.required],
      }, {
        validators: PasswordValidators.passwordsShouldMatch,
      },
    );
  }

  get username(): FormControl {
    return this.form.get('userName') as FormControl;
  }

  get zip(): FormControl {
    return this.form.get('zip') as FormControl;
  }

  get password(): FormControl {
    return this.form.get('password') as FormControl;
  }

  get passwordre(): FormControl {
    return this.form.get('passwordre') as FormControl;
  }

  submit(f: any) {
    console.log(f);
  }

  ngOnInit(): void {}
}

// Validators.pattern(/^[A-ZÁÉÓŐÚŰ][a-záéóőúű]+$/),
