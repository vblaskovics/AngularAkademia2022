import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/utils/guards/auth.guard';
import { AddTodoComponent } from './features/add-todo/add-todo.component';
import { TodosComponent } from './features/todos/todos.component';

const routes: Routes = [
  {
    path: '',
    component: TodosComponent,
  },
  {
    path: 'new',
    component: AddTodoComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoRoutingModule {}
