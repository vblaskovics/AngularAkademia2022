import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoItemsComponent } from './components/todo-items/todo-items.component';
import { TodoDetailsComponent } from './components/todo-details/todo-details.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoItemsComponent,
    TodoDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
