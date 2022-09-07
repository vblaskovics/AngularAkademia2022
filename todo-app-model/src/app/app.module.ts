import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
<<<<<<< HEAD
import { TodoListMultiComponent } from './components/todo-list-multi/todo-list-multi.component';
import { TodoItemMultiComponent } from './components/todo-item-multi/todo-item-multi.component';
=======
import { TodoList2Component } from './components/todo-list2/todo-list2.component';
import { TodoItem2Component } from './components/todo-item2/todo-item2.component';
>>>>>>> 7d99ba94b13527368e1a2a93686137e8203437a4

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoItemComponent,
<<<<<<< HEAD
    TodoListMultiComponent,
    TodoItemMultiComponent
=======
    TodoList2Component,
    TodoItem2Component
>>>>>>> 7d99ba94b13527368e1a2a93686137e8203437a4
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
