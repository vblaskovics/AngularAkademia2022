import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoTableComponent } from './components/todo-table/todo-table.component';
import { TodoDetailsComponent } from './components/todo-details/todo-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignInComponent } from './components/sign-in/sign-in.component';

const routes: Routes = [
  {path: 'todo-table', component: TodoTableComponent},
  {path: 'sign-in', component: SignInComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    TodoTableComponent,
    TodoDetailsComponent,
    SignInComponent
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
