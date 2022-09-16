import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { RandomUserComponent } from './components/random-user/random-user.component';
import { PostCountComponent } from './components/post-count/post-count.component';
import { PhotoUrlsComponent } from './components/photo-urls/photo-urls.component';
import { UserPostsComponent } from './components/user-posts/user-posts.component';

const routes: Routes = [
  { path: '', redirectTo: '1_feladat', pathMatch: 'full'},
  { path: '1_feladat', component: UserListComponent },
  { path: '2_feladat', component: RandomUserComponent },
  { path: '3_feladat', component: PostCountComponent },
  { path: '4_feladat', component: PhotoUrlsComponent },
  { path: '5_feladat', component: UserPostsComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    RandomUserComponent,
    PostCountComponent,
    PhotoUrlsComponent,
    UserPostsComponent
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
