import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, from, Observable, Subject } from 'rxjs';
import { TODO } from '../Interfaces/todo.interface';
import { mockTodos } from '../MockData';
import { progress } from '../progress';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  // todos: TODO[];
  todos$: BehaviorSubject<TODO[]> = new BehaviorSubject<TODO[]>([]);
  currentDetail$: BehaviorSubject<TODO | undefined> = new BehaviorSubject<
    TODO | undefined
  >(undefined);
  constructor() {
    // this.todos = mockTodos;
    this.todos$.next(mockTodos);
  }
  getTodos() {
    return this.todos$;
  }
  getTodo(id: number): Observable<TODO> {
    return from(this.todos$.getValue()).pipe(
      filter((todo: TODO) => {
        return todo.id == id;
      })
    );
  }
  changeProgressState(todoId: number) {
    let todos = this.todos$.getValue();
    //console.log(todos);

    let todoIndex = todos.findIndex((todo: TODO) => {
      return todo.id == todoId;
    });
    switch (todos[todoIndex].progress) {
      case progress.done:
        todos[todoIndex].progress = progress.open;
        break;
      case progress.inProgress:
        todos[todoIndex].progress = progress.done;
        break;
      case progress.open:
        todos[todoIndex].progress = progress.inProgress;
        break;
    }

    this.todos$.next(todos);
  }
  /*  changeStateOfTodo(todo: TODO): void {
    switch (todo.progress) {
      case progress.open:
        todo.progress = progress.inProgress;
        break;
      case progress.inProgress:
        todo.progress = progress.done;
        break;
      case progress.done:
        todo.progress = progress.open;
        break;
      default:
        break;
    }
  } */
  showDetailOfTodo(todo: TODO) {
    this.currentDetail$.getValue() == todo
      ? this.currentDetail$.next(undefined)
      : this.currentDetail$.next(todo);
  }
  pushTodo(title: string) {
    let max = 0;
    let todos = this.todos$.getValue();
    todos.forEach((todo) => {
      todo.id > max && (max = todo.id);
    });
    let pushable: TODO = {
      id: max + 1,
      title: title,
      progress: progress.open,
      user_id: 1,
      date: '2022-08-17',
    };

    todos.push(pushable);
    //this.todos$.next(todos);
  }
}
