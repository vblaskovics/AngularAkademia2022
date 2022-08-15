import { Component, Input, OnInit } from '@angular/core';
import { ToDo } from 'src/app/model/to-do';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  items: ToDo[] = new Array();
  users: User[] = new Array();

  isRowClicked: boolean;
  clickedToDo?: ToDo;

  constructor() {
    this.isRowClicked = false;

    this.users.push({
      id: 50,
      name: 'Kiss Izabella',
      email: 'kiss.izabella@gmail.com',
    });
    this.users.push({
      id: 51,
      name: 'Szabó Levente',
      email: 'szabo.levente@gmail.com',
    });
    this.users.push({
      id: 52,
      name: 'Szente Ibolya',
      email: 'szente.ibolya@gmail.com',
    });

    this.items.push({
      id: 1,
      title: 'Learn Angular Event Emitters',
      progress: 'in progress',
      description: 'Just do it!',
      date: new Date('2022-08-11'),
      user_id: 50,
      subTodoIds: [112, 113, 114],
    });
    this.items.push({
      id: 3,
      title: 'Running',
      progress: 'done',
      description: 'Running on Margaret Island',
      date: new Date('2022-05-07'),
      user_id: 52,
      subTodoIds: [10, 14],
    });
    this.items.push({
      id: 4,
      title: 'Clean',
      progress: 'open',
      description: 'Organize the house, clean the kitchen',
      date: new Date('2022-08-28'),
      user_id: 50,
      subTodoIds: [90, 21],
    });
    this.items.push({
      id: 2,
      title: "Organize Zsófi's party",
      progress: 'in progress',
      description: 'Buy things for the party',
      date: new Date('2022-08-13'),
      user_id: 51,
      subTodoIds: [76, 78],
    });
    this.items.push({
      id: 5,
      title: 'Write an email',
      progress: 'done',
      description: 'Write an email to my family members',
      date: new Date('2022-07-21'),
      user_id: 51,
      subTodoIds: [90, 21],
    });
  }

  ngOnInit(): void {}

  getUser(id: number): User {
    return this.users.filter((user) => user.id === id)[0];
  }

  rowClicked(item: ToDo): void {
    this.clickedToDo = item;
    this.isRowClicked = true;
  }
}
