import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { DetailsComponent } from './details/details.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginTodoComponent } from './login-todo-template driven/login-todo.component';
import { LoginTodoReactiveComponent } from './login-todo-reactive/login-todo-reactive.component';
import { LoginTodoReactive2Component } from './login-todo-reactive2/login-todo-reactive2.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    TodoListComponent,
    DetailsComponent,
    NavbarComponent,
    LoginTodoComponent,
    LoginTodoReactiveComponent,
    LoginTodoReactive2Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
        { path: 'login-todo-reactive2-component', component: LoginTodoReactive2Component },
  ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
