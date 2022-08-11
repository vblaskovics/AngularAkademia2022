import { Component } from '@angular/core';
import { Todo } from './models/todo';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app-model';
  items: Todo[] = [];
  firstTitle = 'Simple! ToDo List'
  secondTitle = 'Advanced ToDo List'
  items2: Todo[] = [];
  constructor(){
    this.items.push({
      id: 1,
      title: 'write an email',
      createDate: '2022-08-11',
    },{
      id: 2,
      title: 'Make an invoice',
      createDate: '2022-08-11',
    },{
      id: 3,
      title: 'Paint a painting',
      createDate: '2022-08-11',
    });
    this.items2.push({
      id: 1,
      title: 'write an email',
      createDate: '2022-08-04',
      sublist:[
        {
          id:1,
          title:'sublist1',
          createDate:'2022-08-06',
          sublist:[
            {
              id:13,
              title:'Valasztas',
              createDate:'2022.08.06'
            }
          ]
        },
        {
          id:2,
          title:'sublist2',
          createDate:'2022-08-08'
        },
        {
          id:3,
          title:'sublist3',
          createDate:'2022-08-15'
        }
      ]
    },{
      id: 2,
      title: 'Make an invoice',
      createDate: '2022-08-11',
      sublist:[
        {
          id:1,
          title:'sublist1',
          createDate:'2022-08-11'
        }
      ]
    },{
      id: 3,
      title: 'Paint a painting',
      createDate: '2022-08-11',
    });
  }
}
