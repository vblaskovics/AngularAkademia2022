import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoListComponentComponent } from './components/todo-list-component/todo-list-component.component';
import { TodoListMultiComponent } from './components/todo-list-multi/todo-list-multi.component';
import { TodoItemMultiComponent } from './components/todo-item-multi/todo-item-multi.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    TodoListComponentComponent,
    TodoListMultiComponent,
    TodoItemMultiComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
