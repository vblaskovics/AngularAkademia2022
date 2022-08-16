import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoTableListComponent } from './components/todo-table-list/todo-table-list.component';
import { TodoTableItemComponent } from './components/todo-table-item/todo-table-item.component';
import { TodoDetailsComponent } from './components/todo-details/todo-details.component';
import { TodoNavbarComponent } from './components/todo-navbar/todo-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoTableListComponent,
    TodoTableItemComponent,
    TodoDetailsComponent,
    TodoNavbarComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
