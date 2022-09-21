import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
/* import { RandomUserComponent } from './components/random-user/random-user.component'; */
import { RandomUser2Component } from './components/random-user2/random-user2.component';
import { AlbumImageComponent } from './components/album-image/album-image.component';

const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', component: UserListComponent },
  { path: 'random-user', component: RandomUser2Component },
  { path: 'album-image', component: AlbumImageComponent },
];

@NgModule({
  declarations: [AppComponent, UserListComponent, NavbarComponent, RandomUser2Component, AlbumImageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
