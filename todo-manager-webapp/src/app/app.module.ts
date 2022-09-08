import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoTableListComponent } from './components/todo-table-list/todo-table-list.component';
import { TodoTableItemComponent } from './components/todo-table-item/todo-table-item.component';
import { TodoDetailsComponent } from './components/todo-details/todo-details.component';
import { TodoNavbarComponent } from './components/todo-navbar/todo-navbar.component';
import { TodoNavbarFormComponent } from './components/todo-navbar-form/todo-navbar-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoSigninPageComponent } from './components/todo-signin-page/todo-signin-page.component';
import { RouterModule, Routes } from '@angular/router';
import { TodoLoginPageComponent } from './components/todo-login-page/todo-login-page.component';
import { LoggedInGuard } from './services/logged-in.guard';

const routes: Routes = [
  { path: '', component: TodoTableListComponent },
  { path: 'signin', component: TodoSigninPageComponent },
  { path: 'login', component: TodoLoginPageComponent },
  {
    path: 'todonavbarform',
    component: TodoNavbarFormComponent,
    canActivate: [LoggedInGuard],
  },
];

@NgModule({
  declarations: [
    AppComponent,
    TodoTableListComponent,
    TodoTableItemComponent,
    TodoDetailsComponent,
    TodoNavbarComponent,
    TodoNavbarFormComponent,
    TodoSigninPageComponent,
    TodoLoginPageComponent,
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
