import { Component, OnInit, Output } from '@angular/core';
import { progress, Todo } from 'src/app/models/todo';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-todo-table',
  templateUrl: './todo-table.component.html',
  styleUrls: ['./todo-table.component.css'],
})
export class TodoTableComponent implements OnInit {
  @Output() todos: Todo[] = new Array();
  @Output() users: User[] = new Array();
  @Output() subTodos: Todo[] = new Array();

  @Output() selectedTodo?: Todo;
  isSelected: boolean;
  @Output() progressCounter: number;
  todo!: Todo;
  isAscending = false;


  constructor() {
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

      (this.isSelected = false);

      this.progressCounter = 0;
  }

  ngOnInit(): void {}

  nameUser(userId: string | number) {
    let user = this.users.find((user) => {
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

  get inProgressNumber() {
    let counter = 0;
    this.todos.forEach(todo => {
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
}

