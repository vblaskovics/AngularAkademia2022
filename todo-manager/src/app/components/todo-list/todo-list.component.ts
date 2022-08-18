import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { todos } from 'src/app/mock/todo-mock';
import { Progress } from 'src/app/users-model/progress-enum';
import { Todo } from 'src/app/users-model/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  @Output() item: EventEmitter<Todo> = new EventEmitter();
  todos = todos;
  isAscending = false;
  myForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      title: ['', Validators.required]
    })
  }

  ngOnInit(): void {}

  showTodoDetails(todo: Todo) {
    this.item.emit(todo);
  }

  countInProgressTodos(): number {
    let count = 0;
    this.todos.forEach((current: Todo) => {
      if (current.progress == Progress.IN_PROGRESS) {
        count++;
      }
    });
    return count;
  }

  sortProgress() {
    if (this.isAscending) {
      this.todos.sort((a, b) =>
        a.progress < b.progress ? 1 : a.progress > b.progress ? -1 : 0
      );
    } else {
      this.todos.sort((a, b) =>
        a.progress > b.progress ? 1 : a.progress < b.progress ? -1 : 0
      );
    }
    this.isAscending = !this.isAscending;
  }

  onSubmit():void {
  let newTodo = {
    title: this.myForm.value['title'],
    id: todos.length+1,
    progress: Progress.OPEN,
    description: 'sleep',
    date: '2022-10-18',
    userId: 2,
    subTodoIds: [1, 2],
  }
    this.todos.push(newTodo);
  }
}
