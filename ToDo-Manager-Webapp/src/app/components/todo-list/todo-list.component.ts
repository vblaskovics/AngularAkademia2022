import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToDo } from 'src/app/model/to-do';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  @Output() inProgressCount: EventEmitter<number> = new EventEmitter<number>();

  items: ToDo[] = new Array();
  users: User[] = new Array();
  subTodos: ToDo[] = new Array();

  isRowClicked: boolean;
  clickedToDo?: ToDo;
  clickedSubtodos?: ToDo[];
  inProgressCounter: number;
  progressArray: Array<string> = ['open', 'in progress', 'done'];
  sortDirectionIncrement: boolean = true;
  incrementEmoji: string = '🔼';
  decrementEmoji: string = '🔽';
  sortButtonEmoji: string = '🔼';

  constructor() {
    this.isRowClicked = false;

    this.users.push({
      id: 50,
      name: 'Kiss Izabella',
      email: 'kiss.izabella@gmail.com',
    });
    this.users.push({
      id: 51,
      name: 'Szabó Levente',
      email: 'szabo.levente@gmail.com',
    });
    this.users.push({
      id: 52,
      name: 'Szente Ibolya',
      email: 'szente.ibolya@gmail.com',
    });

    this.items.push({
      id: 1,
      title: 'Learn Angular Event Emitters',
      progress: 'in progress',
      description: 'Just do it!',
      date: new Date('2022-08-11'),
      user_id: 50,
      subTodoIds: [112, 113, 114],
    });
    this.items.push({
      id: 3,
      title: 'Running',
      progress: 'done',
      description: 'Running on Margaret Island',
      date: new Date('2022-05-07'),
      user_id: 52,
      subTodoIds: [],
    });
    this.items.push({
      id: 4,
      title: 'Clean',
      progress: 'open',
      description: 'Organize the house, clean the kitchen',
      date: new Date('2022-08-28'),
      user_id: 50,
      subTodoIds: [],
    });
    this.items.push({
      id: 2,
      title: "Organize Zsófi's bachelorette party",
      progress: 'in progress',
      description: 'Buy things for the party',
      date: new Date('2022-08-13'),
      user_id: 51,
      subTodoIds: [76, 78, 79, 80],
    });
    this.items.push({
      id: 5,
      title: 'Write an email',
      progress: 'done',
      description: 'Write an email to my family members',
      date: new Date('2022-07-21'),
      user_id: 51,
      subTodoIds: [],
    });

    this.subTodos.push({
      id: 112,
      title: 'Watch videos from Maximilien',
      progress: 'in progress',
      description: 'Just do it!',
      date: new Date('2022-08-11'),
      user_id: 50,
      subTodoIds: [],
    });
    this.subTodos.push({
      id: 113,
      title: 'Write notes',
      progress: 'in progress',
      description: 'Just do it!',
      date: new Date('2022-08-11'),
      user_id: 50,
      subTodoIds: [],
    });
    this.subTodos.push({
      id: 114,
      title: 'Practice - work on project',
      progress: 'in progress',
      description: 'Just do it!',
      date: new Date('2022-08-11'),
      user_id: 50,
      subTodoIds: [],
    });
    this.subTodos.push({
      id: 76,
      title: 'Order balloons',
      progress: 'in progress',
      description: 'Just do it!',
      date: new Date('2022-08-11'),
      user_id: 51,
      subTodoIds: [],
    });
    this.subTodos.push({
      id: 78,
      title: 'Send invitations',
      progress: 'in progress',
      description: 'Just do it!',
      date: new Date('2022-08-11'),
      user_id: 51,
      subTodoIds: [],
    });
    this.subTodos.push({
      id: 79,
      title: 'Print',
      progress: 'in progress',
      description: 'Just do it!',
      date: new Date('2022-08-11'),
      user_id: 51,
      subTodoIds: [],
    });
    this.subTodos.push({
      id: 80,
      title: 'Bake a cake',
      progress: 'in progress',
      description: 'Just do it!',
      date: new Date('2022-08-11'),
      user_id: 51,
      subTodoIds: [],
    });
  }

  ngOnInit(): void {
    this.onInprogressCount();
  }

  getUser(id: number): User {
    return this.users.filter((user) => user.id === id)[0];
  }

  rowClicked(item: ToDo): void {
    this.clickedToDo = item;
    this.isRowClicked = true;
    this.getClickedSubtodos(item);
  }

  getClickedSubtodos(todo: ToDo): ToDo[] {
    this.clickedSubtodos = this.subTodos.filter((subTodo) =>
      todo.subTodoIds.includes(subTodo.id)
    );
    return this.clickedSubtodos;
  }

  onInprogressCount(): void {
    this.inProgressCounter = this.items.filter(
      (item) => item.progress === 'in progress'
    ).length;
    this.inProgressCount.emit(this.inProgressCounter);
  }

  changeProgress(todo: ToDo): void {
    todo.progress === 'open'
      ? (todo.progress = 'in progress')
      : todo.progress === 'in progress'
      ? (todo.progress = 'done')
      : (todo.progress = 'open');

    this.onInprogressCount();
  }

  onSortButtonClicked(): void {
    if (this.sortDirectionIncrement) {
      this.items.sort(
        (a, b) =>
          this.progressArray.indexOf(a.progress) -
          this.progressArray.indexOf(b.progress)
      );
    } else {
      this.items.sort(
        (a, b) =>
          this.progressArray.indexOf(b.progress) -
          this.progressArray.indexOf(a.progress)
      );
    }

    this.sortDirectionIncrement = !this.sortDirectionIncrement;
    this.sortDirectionIncrement ? this.sortButtonEmoji = this.incrementEmoji : this.sortButtonEmoji = this.decrementEmoji;
  }
}
