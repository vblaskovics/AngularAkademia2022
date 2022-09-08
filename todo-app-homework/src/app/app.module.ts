import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TodoListComponent } from './Components/todo-list/todo-list.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { AddTodoComponent } from './pages/add-todo/add-todo.component';
import { TodoItemComponent } from './Components/todo-item/todo-item.component';
import { DetailsComponent } from './Components/details/details.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { AuthGuard } from './auth.guard';
import { TodosComponent } from './pages/todos/todos.component';
const routes: Routes = [
  {
    path: 'todo',
    component: TodosComponent,
    canActivate: [AuthGuard],
  },
  { path: 'todo/new', component: AddTodoComponent, canActivate: [AuthGuard] },
  {
    path: 'sign-up',
    component: SignUpComponent,
  },
  {
    path: 'sign-in',
    component: SignInComponent,
  },
];
@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoItemComponent,
    DetailsComponent,
    NavbarComponent,
    SignUpComponent,
    AddTodoComponent,
    SignInComponent,
    TodosComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
