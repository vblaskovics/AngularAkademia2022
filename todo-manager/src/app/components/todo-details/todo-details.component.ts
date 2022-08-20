import { Component, Input, OnInit, Output } from '@angular/core';
import { progress, Todo } from 'src/app/models/todo';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {
  @Input() selectedTodo?: Todo;
  @Input() users?: User[];
  @Input() subTodos?: Todo[];

  subTodoList?: Todo[] = [];

  @Output() subTodo?: Todo;

  constructor() {}

  ngOnInit(): void {
  }

  nameUser(userId: any) {
    let user = this.users?.find((user) => {
      if (userId === user.id) {
        return user;
      }
      return false;
    });
    return user?.name;
  }

  userEmail(userId: any) {
    let user = this.users?.find((user) => {
      if (userId === user.id) {
        return user;
      }
      return false;
    });
    return user?.email;
  }

  listSubTodos(): Todo[] {
    let subtodoIds = this.selectedTodo?.subTodoIds;
    // console.log('subtodoIds', subtodoIds);
    // console.log('subtodos', this.subTodos);
    this.subTodoList = this.subTodos?.filter(subtodo => subtodoIds?.includes(subtodo.id));
    // console.log('subtodolist', this.subTodoList);
    return this.subTodoList ? this.subTodoList : [];
  }

  progressChange(): void {
    console.log('seltodo',this.selectedTodo);
    let nextState;
    if(this.selectedTodo?.progress == progress.open) {
      nextState = progress.inProgress;
    } else if ( this.selectedTodo?.progress == progress.inProgress) {
     nextState = progress.done;
    } else {
      nextState = progress.open;
    } if(this.selectedTodo) {
    this.selectedTodo.progress = nextState;
    }
  }

}
