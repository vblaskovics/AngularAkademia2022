import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { LoginModule } from './features/login/login.module';
import { TodoModule } from './features/todo/todo.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlreadyInGuard } from './utils/guards/already-in.guard';
import { SharedModule } from './shared/shared.module';
const routes: Routes = [
  {
    path: 'todo',
    loadChildren: () =>
      import('./features/todo/todo.module').then((m) => m.TodoModule),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./features/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: '**',
    redirectTo: 'todo',
  },
];
@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    SharedModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
