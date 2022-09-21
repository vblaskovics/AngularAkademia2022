import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component'
import { RouterModule, Routes } from '@angular/router';
import { Users2Component } from './components/users2/users2.component';
import { UsersPostComponent } from './components/users-post/users-post.component';

const routes: Routes = [
  { path: '', redirectTo: 'feladat1', pathMatch: 'full'},
  { path: 'feladat1', component: UsersComponent },
  { path: 'feladat2', component: Users2Component },
  { path: 'feladat3', component: UsersPostComponent}];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    NavbarComponent,
    Users2Component,
    UsersPostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
