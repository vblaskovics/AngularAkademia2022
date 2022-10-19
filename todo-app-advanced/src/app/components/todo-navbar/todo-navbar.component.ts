import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { LoginServiceService } from 'src/app/services/login-service.service';
import { TodoDataService } from 'src/app/services/todo-data.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-todo-navbar',
  templateUrl: './todo-navbar.component.html',
  styleUrls: ['./todo-navbar.component.css'],
})
export class TodoNavbarComponent implements OnInit {
  myForm: FormGroup;
  IsValidForm: boolean = false;

  navigateToLogin: boolean = true;

  constructor(fb: FormBuilder, public loginService: LoginServiceService, public todoService: TodoDataService) {
    this.myForm = fb.group({
      title: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(15)]],
    });
  }
  get title(): FormControl {
    return this.myForm.get('title') as FormControl;
  }
  ngOnInit(): void {}

  onSubmit() {
    this.todoService.addedElementHandler(this.title.value);
  }
  onReset() {
    this.myForm.reset();
  }
  handler() {
    console.log(this.title.errors);

    if (this.myForm.status === 'INVALID') {
      console.log(this.myForm.status);
      this.IsValidForm = true;

    } else {
      this.IsValidForm =false;
      this.onSubmit();
      this.onReset();
    }
  }
}
