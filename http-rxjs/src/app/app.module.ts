import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { RandomUserComponent } from './components/random-user/random-user.component';
import { RandomUser2Component } from './components/random-user2/random-user2.component';

const routes: Routes = [
  { path: '', redirectTo: '1_feladat', pathMatch: 'full'},
  { path: '1_feladat', component: UserListComponent },
  { path: '2_feladat', component: RandomUserComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    RandomUserComponent,
    RandomUser2Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
