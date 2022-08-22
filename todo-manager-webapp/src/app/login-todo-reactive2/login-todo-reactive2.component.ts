import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { PasswordValidators } from './password.validators';

@Component({
  selector: 'app-login-todo-reactive2',
  templateUrl: './login-todo-reactive2.component.html',
  styleUrls: ['./login-todo-reactive2.component.css']
})
export class LoginTodoReactive2Component implements OnInit {

  form: FormGroup;

  constructor(fb:FormBuilder) {
    this.form = fb.group({
      firstname: ['' , [
        Validators.minLength(2),]],
      lastname: ['', [
        Validators.minLength(2), ]],
      username: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(/^[A-ZÁÉÓŐÚŰa-záéóőúű0-9]+$/)]],
      zip: ['', [
        Validators.minLength(4),
        Validators.maxLength(5)]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^.*(?=.*[#@.*])/),]],
      passwordre: ['',
        Validators.required,]
    }, {
      validator: PasswordValidators.passwordsShouldMatch
    });
  }

  get username(): FormArray {
    return this.form.get('username') as FormArray
  };

  get zip(): FormControl {
    return this.form.get('zip') as FormControl
  };

  get password(): FormArray {
    return this.form.get('password') as FormArray
  };

  get passwordre(): FormArray {
    return this.form.get('passwordre') as FormArray
  };

  submit(f: any) {
    console.log(f);
  }

  ngOnInit(): void {
  }

}


// Validators.pattern(/^[A-ZÁÉÓŐÚŰ][a-záéóőúű]+$/),
