import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-list2',
  templateUrl: './todo-list2.component.html',
  styleUrls: ['./todo-list2.component.css']
})
export class TodoList2Component implements OnInit {

  items: Todo[] = new Array();

  constructor() {
    this.items.push({id: 1, title: 'Write an email', createDate: '2022-08-11', subList: ['Write', 'an', 'email']})
    this.items.push({id: 2, title: 'Make an invoice', createDate: '2022-08-05', subList: ['Make', 'an', 'invoice']})
    this.items.push({id: 3, title: 'Paint a painting', createDate: '2022-07-22', subList: ['Paint', 'a', 'painting']})
  }

  ngOnInit(): void {
  }

  deleteItem(todo: Todo): void {
    this.items = this.items.filter(i => i.id !== todo.id);
  }

}
