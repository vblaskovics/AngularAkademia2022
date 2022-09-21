import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { SubPaeComponent } from './sub-pae/sub-pae.component';
import { RandomUser2Component } from './random-user2/random-user2.component';
import { RandomUser3Component } from './random-user3/random-user3.component';
import { AlbumComponent } from './album/album.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    NavbarComponent,
    SubPaeComponent,
    RandomUser2Component,
    RandomUser3Component,
    AlbumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
