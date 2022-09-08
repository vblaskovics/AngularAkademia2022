import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { ColorGeneratorDirective } from './color-generator.directive';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [];
@NgModule({
  declarations: [AppComponent, TodoListComponent, ColorGeneratorDirective],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
