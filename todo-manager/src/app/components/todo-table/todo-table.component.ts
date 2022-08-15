import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-todo-table',
  templateUrl: './todo-table.component.html',
  styleUrls: ['./todo-table.component.css'],
})
export class TodoTableComponent implements OnInit {
  @Output() todos: Todo[] = new Array();
  @Output() users: User[] = new Array();

   todo!: Todo;
  @Output() selectedTodo?: Todo;
  isSelected: boolean;

  constructor() {
    this.todos = [{
      id: 1,
      title: 'write a message',
      progress: 'done',
      description: 'later',
      date: '2022-08-12',
      user_id: 91,
      subTodoIds: 'not yet',
    },
    {
      id: 2,
      title: 'read all messages',
      progress: 'in progress',
      description: 'later',
      date: '2022-08-15',
      user_id: 92,
      subTodoIds: 'not yet',
    },
    {
      id: 3,
      title: 'send an email',
      progress: 'done',
      description: 'later',
      date: '2022-08-14',
      user_id: 93,
      subTodoIds: 'not yet',
    },
    {
      id: 4,
      title: 'read a manual',
      progress: 'open',
      description: 'later',
      date: '2022-08-21',
      user_id: 93,
      subTodoIds: 'not yet',
    },
    {
      id: 5,
      title: 'write a manual',
      progress: 'open',
      description: 'later',
      date: '2022-08-30',
      user_id: 91,
      subTodoIds: 'not yet',
    }],

    this.users.push({ id: 91, name: 'Adam Smith', email: 'a@s.com' });
    this.users.push({ id: 92, name: 'Mary Jones', email: 'm@j.com' });
    this.users.push({ id: 93, name: 'Charlie Big', email: 'ch@b.com' });

    this.isSelected = false;
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
}
// id: number,
//   name: string,
//   email: string

// id: number,
//   title: string,
//   progress: string,
//   description: string,
//   date: string,
//   user_id: number | string,
//   subTodoIds: number | string
// progress ( open, in progress, done )
// user_id (a todo-ért felelős user id-ja)
// subTodoIds ( alfeladatok id-ja)
