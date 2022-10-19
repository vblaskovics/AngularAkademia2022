import { TodoServiceService } from './../../services/todo-service.service';
import { AfterViewInit, Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { progress, Todo } from 'src/app/models/todo';
import { User } from 'src/app/models/user';
import {MatSort, Sort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';

@Component({
  selector: 'app-todo-table',
  templateUrl: './todo-table.component.html',
  styleUrls: ['./todo-table.component.css'],
})
export class TodoTableComponent implements OnInit, AfterViewInit {
  // @Input() todos?: Todo[];
  // @Input() users?: User[];
  // @Input() subTodos?: Todo[];

  todos: Todo[] = this.todoService.todos;
  users: User[] = this.todoService.users;
  subTodos: Todo[] = this.todoService.subTodos;

  @Output() selectedTodo?: Todo;
  isSelected: boolean;
  isAscending = false;
  // nextId: number = 0;
  myForm: FormGroup;

  displayedColumns: string[] = ['id', 'title', 'progress', 'username'];
  dataSource = new MatTableDataSource(this.todos);

  @ViewChild(MatSort) sort!: MatSort;

  constructor(fb: FormBuilder, private todoService: TodoServiceService, private _liveAnnouncer: LiveAnnouncer) {
    this.myForm = fb.group({
      todoInput: ['',
    [Validators.required, Validators.minLength(4), Validators.maxLength(15)]],
    });

      this.isSelected = false;

      // this.nextId = this.todos.length + 1;
  }

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

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

  // announceSortChange(sortState: Sort) {
  //   if (sortState.direction) {
  //     this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
  //   } else {
  //     this._liveAnnouncer.announce('Sorting cleared');
  //   }
  // }

  progressSort(sortState: Sort) {
    console.log('sort', sortState);

    if (sortState.direction === "asc") {
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
