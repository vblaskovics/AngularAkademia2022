import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { progress, Todo } from 'src/app/shared/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  OverallInProgress: number = 0;
  LastInProgress: number = 0;

  items: Todo[];

  colorGrey: boolean = false;
  toDoElementSelected: boolean;
  signingIn?: boolean;

  @Output() selectedTodo?: Todo;

  nextId!: number;
  sortedItems?: Todo[];

  SortDescendingOrder: string[] = [progress.Open, progress.In_Progress, progress.Done]
  SortAscendingOrder: string[] = [progress.Done,progress.In_Progress, progress.Open];


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
    this.inProgress();
    this.nextId = this.items.length+1;
  }




  ngOnInit(): void {}


  isSecond(item: Todo['id']) {
    if (item % 2 === 0) {
      return (this.colorGrey = true);
    } else return (this.colorGrey = false);
  }

  selectedTodoHandler(selectedItem: Todo) {
    this.selectedTodo = selectedItem;
    this.toDoElementSelected = true;
  }

  closeTheDetails(event: boolean) {
    this.toDoElementSelected = !event;
  }
  removeThisItem(todo: Todo) {
    let todoIndex = this.items.indexOf(todo);
    this.items.splice(todoIndex, 1);
    this.inProgress();
  }
  inProgress() {
    for (let index = 0; index < this.items.length; index++) {
      const element = this.items[index];
      if (element.progress == progress.In_Progress) {
        this.LastInProgress++;
      }
    }
    this.OverallInProgress = this.LastInProgress;
    this.LastInProgress = 0;
  }

  updateProgressOfitem(event: Todo) {
    const index = this.items.indexOf(event);
    if (this.items[index].progress === progress.Done) {
      this.items[index].progress = progress.Open;
    }
     else if (this.items[index].progress === progress.Open) {
      this.items[index].progress = progress.In_Progress;
    }
     else if (this.items[index].progress === progress.In_Progress) {
      this.items[index].progress = progress.Done;
    }
    this.inProgress();
  }
  sortAscending() {
    const resultOfSort = this.items.sort((a,b) => this.SortAscendingOrder.indexOf(a.progress) - this.SortAscendingOrder.indexOf(b.progress))
  }
  sortDescending() {
    const resultOfSort = this.items.sort((a,b) => this.SortDescendingOrder.indexOf(a.progress) - this.SortDescendingOrder.indexOf(b.progress))
  }

  addedElementHandler(titleInput: string){
   let array: Todo =
      {
       id: this.nextId++,
       title: titleInput,
       progress: progress.Open,
       description: "Template",
       date: "Template",
       user_id: [{
        id: 1,
        name: "Null",
        email: "Null"
       }]
      }

     this.items.push(array);
     console.log(this.nextId+1)
  }

  loggingInHandler(event: boolean){
    this.signingIn = event;
  }
}
