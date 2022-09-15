import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserListComponent } from './components/user-list/user-list.component';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { UserComponent } from './components/user/user.component';
import { User2Component } from './components/user2/user2.component';
import { User3Component } from './components/user3/user3.component'

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserComponent,
    User2Component,
    User3Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
