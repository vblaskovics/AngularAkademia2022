import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoDetailsComponent } from './components/todo-details/todo-details.component';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SignInFormComponent } from './components/sign-in-form/sign-in-form.component';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EditTodoItemComponent } from './components/edit-todo-item/edit-todo-item.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'todo-list', component: TodoListComponent},
  {path: 'edit-todo/:id', component: EditTodoItemComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    TodoListComponent,
    TodoDetailsComponent,
    NavbarComponent,
    SignInFormComponent,
    HomeComponent,
    EditTodoItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
