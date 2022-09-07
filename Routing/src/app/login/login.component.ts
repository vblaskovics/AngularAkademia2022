import { FormControl } from '@angular/forms';
import { UserFormModel } from './user-form.model';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserForm } from './user-form';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form: FormGroup<UserFormModel> = new UserForm;

  get username(): FormControl {
    return this.form.get('username') as FormControl;
  }

  get password(): FormControl {
    return this.form.get('password') as FormControl;
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.form.value);
    this.form.reset()
  }

}
