import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent implements OnInit {
  todoAddForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private todoService: TodosService
  ) {
    this.todoAddForm = fb.group({
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
  get title(): FormControl {
    return this.todoAddForm.get('title') as FormControl;
  }
  ngOnInit(): void {}
  handleForm() {
    if (this.todoAddForm.valid) {
      // this.todoAddForm.reset();
      this.todoService.pushTodo(this.title.value);
      this.router.navigate(['/todo']);
    } else {
      this.todoAddForm.markAllAsTouched();
    }

    console.log(this.todoAddForm);
  }
}
