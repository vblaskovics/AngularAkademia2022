import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { DetailsComponent } from './details/details.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    TodoListComponent,
    DetailsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
