import { Injectable } from '@angular/core';
import { progress, Todo } from '../shared/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoDataService {
  todoItems: Todo[];
  todoListItem?: Todo[];

  toDoElementSelected: boolean;

  selectedTodo?: Todo;


  OverallInProgress: number = 0;

  LastInProgress: number = 0;

  nextId!: number;

  numberOfTodos: number = 0;

  SortDescendingOrder: string[] = [
    progress.Open,
    progress.In_Progress,
    progress.Done,
  ];
  SortAscendingOrder: string[] = [
    progress.Done,
    progress.In_Progress,
    progress.Open,
  ];

  constructor() {
    this.todoItems = [
      {
        id: 1,
        title: 'Do stuff',
        progress: progress.Done,
        description: 'You oughta do it well',
        date: '2022-09-12',
        user_id: [
          {
            id: 1,
            name: 'Köz Gáz',
            email: 'kozgaz@gmail.com',
          },
        ],
      },
      {
        id: 2,
        title: 'Do more amazing stuff',
        progress: progress.In_Progress,
        description: 'Valami',
        date: '2022-11-11',
        user_id: [
          {
            id: 2,
            name: 'Gáz Alma',
            email: 'gazalma@gmail.com',
          },
        ],
        subTodos: [
          {
            id: 2,
            title: 'Do more amazing stuff',
            progress: progress.In_Progress,
            description: 'Valami',
            date: '2022-11-11',
          },
        ],
      },
      {
        id: 3,
        title: 'Oh my gawd do stuff more!',
        progress: progress.Open,
        description: 'Tolod tolod tolod',
        date: '2022-09-12',
        user_id: [
          {
            id: 3,
            name: 'Könny Gáz',
            email: 'konnygaz@gmail.com',
          },
        ],
      },
      {
        id: 4,
        title: 'Are you done yet?',
        progress: progress.Done,
        description: 'Csinálom intézem',
        date: '2022-09-12',
        user_id: [
          {
            id: 4,
            name: 'Kosz Péter',
            email: 'koszpeter@gmail.com',
          },
        ],
      },
      {
        id: 5,
        title: 'Immesurable skills!',
        progress: progress.In_Progress,
        description: 'You oughta do it well',
        date: '2022-09-12',
        user_id: [
          {
            id: 4,
            name: 'Judás Robika',
            email: 'judasrobika@gmail.com',
          },
        ],
      },
    ];

    this.toDoElementSelected = false;
    this.nextId = this.todoItems.length + 1;

    this.countInProgress();
  }

  countInProgress() {
    let sum = 0;
    for (let index = 0; index < this.todoItems.length; index++) {
      const element = this.todoItems[index];
      if (element.progress == progress.In_Progress) {
        sum++;
      }
    }
    this.numberOfTodos = sum;
  }



  closeTheDetails(event: boolean) {
    this.toDoElementSelected = !event;
  }

  removeThisItem(todo: Todo) {
    let todoIndex = this.todoItems.indexOf(todo);
    this.todoItems.splice(todoIndex, 1);
  }

  addedElementHandler(titleInput: string) {
    let array: Todo = {
      id: this.nextId++,
      title: titleInput,
      progress: progress.Open,
      description: 'Template',
      date: 'Template',
      user_id: [
        {
          id: 1,
          name: 'Null',
          email: 'Null',
        },
      ],
    };

    this.todoItems.push(array);
    console.log(this.nextId + 1);
  }

  updateProgressOfitem(todo: Todo) {
    const index = this.todoItems.indexOf(todo);
    if (this.todoItems[index].progress === progress.Done) {
      this.todoItems[index].progress = progress.Open;
    } else if (this.todoItems[index].progress === progress.Open) {
      this.todoItems[index].progress = progress.In_Progress;
    } else if (this.todoItems[index].progress === progress.In_Progress) {
      this.todoItems[index].progress = progress.Done;
    }
    this.countInProgress();
  }

  sortAscending() {
    const resultOfSort = this.todoItems.sort(
      (a, b) =>
        this.SortAscendingOrder.indexOf(a.progress) -
        this.SortAscendingOrder.indexOf(b.progress)
    );
  }
  sortDescending() {
    const resultOfSort = this.todoItems.sort(
      (a, b) =>
        this.SortDescendingOrder.indexOf(a.progress) -
        this.SortDescendingOrder.indexOf(b.progress)
    );
  }

  selectedTodoHandler(selectedItem: Todo) {
    this.selectedTodo = selectedItem;
    this.toDoElementSelected = true;
  }

}
