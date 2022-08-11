import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { ColorGeneratorDirective } from './color-generator.directive';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    ColorGeneratorDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
