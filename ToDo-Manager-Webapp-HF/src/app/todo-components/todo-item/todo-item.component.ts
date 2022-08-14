import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo?: Todo;
  @Output() detailedTodo: EventEmitter<Todo> = new EventEmitter<Todo>();
  items: Todo[];

  constructor() {
    this.items = [{
      id: 1,
      title: 'Accomplish the homework to the Angular Bootcamp',
      progress: 'done', 
      description: 'Create a nice web application',
      date: '2022-08-12',
      user_id: [{id: 1, name: 'Eszter', email: 'eszter.krutilla@t-systems.com'}],
      subTodoIds: [{ id: 1, title:'open VS Code',
        progress: 'done',
        description: 'Coding non stop',
        date: '2022-08-14',
        user_id:[{id: 0, name: 'Eszter', email: 'eszter.krutilla@t-systems.com'}],
        email: 'eszter.krutilla@t-systems.com'}]},
                {     
      id: 2,
      title: 'Make dinner',
      progress: 'open', 
      description: 'Pizza Diavolo',
      date: '2022-08-13',
      user_id: [{id: 2, name: 'Jancsi', email: 'jancsi01@dummymail.com'}],
      subTodoIds: [{ id: 2, title:'Owen baked',
        progress: 'open',
        description: 'Turn on the owen and open the window',
        date: '2022-08-15',
        user_id:[{id: 2, name: 'Jancsi', email: 'jancsi01@dummymail.com'}],
        email: 'jancsi765@dummymail.com'}]},
                {
      id: 3,
      title: 'Write an email',
      progress: 'in progresss', 
      description: 'Write email to the boss',
      date: '2022-08-14',
      user_id: [{id: 3, name: 'Juliska', email: 'juliska02@dummymail.ocm'}],
      subTodoIds: [{ id: 3, title:'',
        progress: 'in progress',
        description: 'Write an email in english and in german langues as well',
        date: '2022-08-16',
        user_id:[{id: 3, name: 'Juliska', email: 'juliska02@dummymail.ocm'}],
        email: 'juliska765@dummymail.com'}]},
                {
      id: 4,
      title: 'Download movies',
      progress: 'open', 
      description: 'Download the bests movies in 2022',
      date: '2022-08-15',
      user_id: [{id: 4, name: 'Eszter', email: 'eszter.krutilla@t-systems.com'}],
      subTodoIds: [{id: 4, title:'Updating google chrome',
        progress: 'open',
        description: 'watch movies with pop corn',
        date: '2022-08-17',
        user_id:[{id: 4, name: 'Eszter', email: 'eszter.krutilla@t-systems.com'}],
        email: 'eszter.krutilla@t-systems.com'}]},
                {
      id: 5,
      title: 'Create recipes',
      progress: 'in progresss', 
      description: 'Create recipes for the Family',
      date: '2022-08-16',
      user_id: [{id: 5, name: 'Jancsi', email: 'jancsi01@dummymail.com'}],
      subTodoIds: [{ id: 5, title:'Purchase recipe book',
        progress: 'in progress',
        description: 'write plant based recipes from internet',
        date: '2022-08-18',
        user_id:[{id: 5, name: 'Jancsi', email: 'jancsi01@dummymail.com'}],
        email: 'jancsi765@dummymail.com'}]},
  ]
  
  }


  ngOnInit(): void {
  }

  clickDetails(){
    console.log('clickdetails emit');
    this.detailedTodo.emit(this.todo);
  }

  detailedItem(t: Todo){
    console.log('clickdetails todo');
    this.items.push(t)

  }


  
  
 
  



}
