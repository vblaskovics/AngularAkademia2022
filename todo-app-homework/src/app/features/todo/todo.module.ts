import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { DetailsComponent } from './components/details/details.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { AddTodoComponent } from './features/add-todo/add-todo.component';
import { TodosComponent } from './features/todos/todos.component';
import { TodoRoutingModule } from './todo-routing.module';

@NgModule({
  declarations: [
    AddTodoComponent,
    TodosComponent,
    DetailsComponent,
    TodoItemComponent,
    TodoListComponent,
  ],
  imports: [TodoRoutingModule, SharedModule],
})
export class TodoModule {}
