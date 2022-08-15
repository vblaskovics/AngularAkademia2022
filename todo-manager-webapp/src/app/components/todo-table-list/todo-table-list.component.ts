import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Progress, Todo } from 'src/app/models/todo-model';
import { User } from 'src/app/models/user-model';

@Component({
  selector: 'app-todo-table-list',
  templateUrl: './todo-table-list.component.html',
  styleUrls: ['./todo-table-list.component.css'],
})
export class TodoTableListComponent implements OnInit {
  @Output() items: Todo[] = new Array();

  @Output() users: User[] = new Array();

  @Output() clickedTodo?: Todo;

  @Output() showDetails: EventEmitter<Todo> = new EventEmitter<Todo>();

  isTodoClicked: boolean = false;

  constructor() {
    this.items = [
      {
        id: 1,
        title: 'Go hang out',
        progress: Progress.done,
        description: 'There is a good disco in the neighbourhood',
        date: '2022-09-08',
        user_id: 1,
      },
      {
        id: 2,
        title: 'Go to the beach',
        progress: Progress.in_progress,
        description: 'We got a good weather now',
        date: '2022-08-18',
        user_id: 2,
      },
      {
        id: 3,
        title: 'Do the shopping',
        progress: Progress.open,
        description: 'You can find the order-list in your pocket',
        date: '2022-08-12',
        user_id: 1,
      },
      {
        id: 4,
        title: 'Do the washing',
        progress: Progress.open,
        description: 'Also your teeth',
        date: '2022-08-15',
        user_id: 3,
      },
      {
        id: 5,
        title: 'Read a book',
        progress: Progress.done,
        description: 'Pick your favorite one',
        date: '2022-08-12',
        user_id: 2,
      },
    ];
    this.users = [
      {
        id: 1,
        name: 'Zoltan Beke',
        email: 'zoltan.beke@gmail.com',
      },
      {
        id: 2,
        name: 'Bela Kiss',
        email: 'bela.kiss@gmail.com',
      },
      {
        id: 3,
        name: 'Ilonka Ffrufrucska',
        email: 'ilonka.frufru@gmail.com',
      },
    ];
  }

  ngOnInit(): void {}

  clickShow(todo: Todo): void {
    this.clickedTodo = todo;
    this.isTodoClicked = true;
  }
}
