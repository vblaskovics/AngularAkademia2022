import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { progress, Todo } from 'src/app/shared/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  items: Todo[];
  colorGrey: boolean = false;
  @Output() toDoElementSelected: boolean;
  @Output() selectedTodo?: Todo;


  constructor() {
    this.items = [
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
  }


  ngOnInit(): void {}

  isSecond(item: Todo['id']) {
    if (item % 2 === 0) {
      return (this.colorGrey = true);
    } else return (this.colorGrey = false);
  }

  selectedTodoHandler(selectedItem: Todo){
    this.selectedTodo = selectedItem;
    this.toDoElementSelected = true;
  }

  closeTheDetails(event: boolean){
    this.toDoElementSelected = !event;
  }
}
