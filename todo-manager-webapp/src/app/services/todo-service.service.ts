import { Injectable } from '@angular/core';
import { Progress, Todo } from '../models/todo-model';
import { User } from '../models/user-model';
import { of, Observable, Subject, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoServiceService {
  items: Todo[];
  users: User[];

  constructor() {
    this.items = [
      {
        id: 1,
        title: 'Go hang out',
        progress: Progress.in_progress,
        description: 'There is a good disco in the neighbourhood',
        date: '2022-09-08',
        user_id: 1,
        subTodos: [
          {
            id: 6,
            title: 'Dress up first',
            progress: Progress.in_progress,
            description: 'Get the green socks',
            date: '2022-09-08',
            user_id: 1,
          },
          {
            id: 7,
            title: "Don't forget to take out the thrash",
            progress: Progress.in_progress,
            description: 'Get the green socks',
            date: '2022-09-08',
            user_id: 1,
          },
        ],
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
        subTodos: [
          {
            id: 8,
            title: 'Do it tomorrow too',
            progress: Progress.open,
            description: 'and wash your teeth',
            date: '2022-08-16',
            user_id: 3,
          },
        ],
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

  showDetails(): void {
    // this.clickOnTable.emit(this.todo);
  }

  changeProgress(): void {
    // this.changeProgressStatus.emit(this.todo);
  }

  findUser(id: number) {
    const findId = this.users?.find((obj) => {
      if (obj.id === id) {
        return obj.name;
      }
      return;
    });
    return findId?.name;
  }

  listItems(): Observable<Todo[]> {
    return of(this.items).pipe(map((todos) => todos));
  }

  listUsers(): Observable<User[]> {
    return of(this.users).pipe(map((users) => users));
  }
}
