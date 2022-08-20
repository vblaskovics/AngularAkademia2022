import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { progress, Todo } from 'src/app/models/todo';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-todo-table',
  templateUrl: './todo-table.component.html',
  styleUrls: ['./todo-table.component.css'],
})
export class TodoTableComponent implements OnInit {
  @Input() todos?: Todo[];
  @Input() users?: User[];
  @Input() subTodos?: Todo[];

  @Output() selectedTodo?: Todo;
  isSelected: boolean;
  isAscending = false;
  // nextId: number = 0;
  myForm: FormGroup;


  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      todoInput: ['',
    [Validators.required, Validators.minLength(4), Validators.maxLength(15)]],
    });

      this.isSelected = false;

      // this.nextId = this.todos.length + 1;
  }

  ngOnInit(): void {}

  nameUser(userId: string | number) {
    let user = this.users?.find((user) => {
      if (userId === user.id) {
        return user;
      }
      return false;
    });
    return user?.name;
  }

  showDetails(todo: Todo): void {
    this.selectedTodo = todo;
    this.isSelected = true;
  }

  get inProgressCounter() {
    let counter = 0;
    this.todos?.forEach(todo => {
      if(todo.progress === progress.inProgress) {
        counter++
      }
    })
    return counter;
  }

  progressChange(todo: Todo): void {
    this.selectedTodo = todo;
    let nextState;
    if(this.selectedTodo.progress == progress.open) {
      nextState = progress.inProgress;
    } else if ( this.selectedTodo.progress == progress.inProgress) {
     nextState = progress.done;
    } else {
      nextState = progress.open;
    }
    this.selectedTodo.progress = nextState;
  }

  progressSort() {
    if (this.isAscending) {
      this.todos?.sort((a, b) =>
        a.progress < b.progress ? 1 : a.progress > b.progress ? -1 : 0
      );
    } else {
      this.todos?.sort((a, b) =>
        a.progress > b.progress ? 1 : a.progress < b.progress ? -1 : 0
      );
    }
    this.isAscending = !this.isAscending;
  }

  onSubmit(formValue: any): void {
    console.log('form value:', formValue);
  }

  handleButton() {
    console.log('form value:', this.myForm.status);
    this.myForm.reset();
  }

  get todoInput(): FormControl {
    return this.myForm.get('todoInput') as FormControl;
  }




}





 // this.todos.push(this.todo);
    // this.todo.id = this.nextId += 1;
    // this.todo.title = formValue;
    // this.todo.progress = progress.open;
    // this.todo.description = '';
    // this.todo.date = '';
    // this.todo.user_id = 0;
    // this.todo.subTodoIds = [];
