import { AfterViewChecked, AfterViewInit, Component, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TodoTableComponent } from './components/todo-table/todo-table.component';
import { progress, Todo } from './models/todo';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  AfterViewChecked, AfterViewInit{
  title = 'todo-manager';

  @Output() todos: Todo[] = new Array();
  @Output() users: User[] = new Array();
  @Output() subTodos: Todo[] = new Array();

  @ViewChild(TodoTableComponent) viewChild!: TodoTableComponent;

  inProgressNumber = 0;

  showSignIn = false;

  myForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      todoInput: ['',
    [Validators.required, Validators.minLength(4), Validators.maxLength(15)]],
    });

    (this.todos = [
      {
        id: 1,
        title: 'write a message',
        progress: progress.done,
        description: 'later',
        date: '2022-08-12',
        user_id: 91,
        subTodoIds: [],
      },
      {
        id: 2,
        title: 'read all messages',
        progress: progress.inProgress,
        description: 'later',
        date: '2022-08-15',
        user_id: 92,
        subTodoIds: [],
      },
      {
        id: 3,
        title: 'send an email',
        progress: progress.done,
        description: 'later',
        date: '2022-08-14',
        user_id: 93,
        subTodoIds: [],
      },
      {
        id: 4,
        title: 'read a manual',
        progress: progress.inProgress,
        description: 'later',
        date: '2022-08-21',
        user_id: 93,
        subTodoIds: [],
      },
      {
        id: 5,
        title: 'write a manual',
        progress: progress.open,
        description: 'later',
        date: '2022-08-30',
        user_id: 91,
        subTodoIds: [11, 12, 13],
      },
    ]);

    this.users.push({ id: 91, name: 'Adam Smith', email: 'a@s.com' });
    this.users.push({ id: 92, name: 'Mary Jones', email: 'm@j.com' });
    this.users.push({ id: 93, name: 'Charlie Big', email: 'ch@b.com' });

    this.subTodos = [
      {
        id: 11,
        title: 'write a draft',
        progress: progress.open,
        description: 'later',
        date: '2022-08-20',
        user_id: 91
      },
      {
        id: 12,
        title: 'correct mistakes',
        progress: progress.open,
        description: 'later',
        date: '2022-08-25',
        user_id: 91
      },
      {
        id: 13,
        title: 'finalize document',
        progress: progress.open,
        description: 'later',
        date: '2022-08-30',
        user_id: 91
      },
      {
        id: 14,
        title: 'another misc subtodo',
        progress: progress.open,
        description: 'later',
        date: '2022-08-30',
        user_id: 91
      },
    ];
  }

  ngOnInit(): void {
  }

  toggleSignIn() {
    if(!this.showSignIn) {
      this.showSignIn = true;
    } else {
      this.showSignIn = false;
    }
  }

  ngAfterViewInit() {
    console.log('AfterViewInit');
    console.log('inProgressCounter set', this.viewChild.inProgressCounter);
    this.inProgressNumber = this.viewChild.inProgressCounter;
  }

  ngAfterViewChecked() {
    console.log('inProgressCounter changed', this.viewChild.inProgressCounter);
    this.inProgressNumber = this.viewChild.inProgressCounter;
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
