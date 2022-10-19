import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/models/todo-model';
import { User } from 'src/app/models/user-model';

@Component({
  selector: '[app-todo-table-item]',
  templateUrl: './todo-table-item.component.html',
  styleUrls: ['./todo-table-item.component.css'],
})
export class TodoTableItemComponent implements OnInit {
  @Input() todo?: Todo;
  @Input() users?: User[];

  @Output() clickOnTable = new EventEmitter<Todo>();
  @Output() changeProgressStatus = new EventEmitter<Todo>();

  constructor() {}

  ngOnInit(): void {}

  findUser(id: number) {
    const findId = this.users?.find((obj) => {
      if (obj.id === id) {
        return obj.name;
      }
      return;
    });
    return findId?.name;
  }

  showDetails(): void {
    this.clickOnTable.emit(this.todo);
  }

  changeProgress(): void {
    this.changeProgressStatus.emit(this.todo);
  }
}
