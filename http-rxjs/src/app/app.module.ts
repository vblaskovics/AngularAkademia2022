import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { UserSiteComponent } from './user-site/user-site.component';
import { UserService } from './services/user.service';
import { UserSite2Component } from './user-site2/user-site2.component';
import { PostCountComponent } from './post-count/post-count.component';
import { AlbumCountComponent } from './album-count/album-count.component';
import { PhotoCountComponent } from './photo-count/photo-count.component';
import { UserPostsComponent } from './user-posts/user-posts.component';

const routes: Routes = [
  { path: '1_feladat', component: UserListComponent },
  { path: '2_feladat', component: UserSite2Component },
  { path: '3_feladat', component: PostCountComponent },
  { path: '4_feladat', component: PhotoCountComponent },
  { path: '5_feladat', component: UserPostsComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    NavbarComponent,
    UserSiteComponent,
    UserSite2Component,
    PostCountComponent,
    AlbumCountComponent,
    PhotoCountComponent,
    UserPostsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
