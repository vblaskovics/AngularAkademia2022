import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Todo } from 'src/app/shared/todo';
import { __values } from 'tslib';

@Component({
  selector: 'app-todo-navbar',
  templateUrl: './todo-navbar.component.html',
  styleUrls: ['./todo-navbar.component.css'],
})
export class TodoNavbarComponent implements OnInit {
  myForm: FormGroup;

  IsValidForm: boolean = false;

  @Input() numberofTodos?: number;
  @Output() title: EventEmitter<string> = new EventEmitter<string>();
  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      title: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    this.title.emit(this.myForm.value.title);
  }
  onReset() {
    this.myForm.reset();
  }
  handler() {
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
