import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-list2',
  templateUrl: './todo-list2.component.html',
  styleUrls: ['./todo-list2.component.css']
})
export class TodoList2Component implements OnInit {

  items: Todo[] = new Array();
  // subList: Todo[] = new Array();

  constructor() {
    this.items = [
    {id: 1, title: 'write an email', createDate: '2022-08-11', },
    {
      id: 2,
      title: 'make an invoice',
      createDate: '2022-08-05',
      subTodos: [
        {id: 4, title: 'check review', createDate: '2022-08-05'},
        {id: 5, title: 'create invoice', createDate: '2022-08-05'}
      ],
    },
    {id: 3, title: 'paint a painting', createDate: '2022-07-21'}];
  }
  // subList: {id: 11, title: 'get equipment', createDate: '2022-08-11'}
  ngOnInit(): void {
  }

  deleteItem(todo: Todo): void {
    // console.log("todo-list2.component deleteITem", todo);
    this.items = this.items.filter(i => i.id != todo.id);
  }

}
