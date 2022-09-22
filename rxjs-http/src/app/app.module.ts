import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'


import { AppComponent } from './app.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';
import { RandomUserComponent } from './components/random-user/random-user.component';
import { RandomUserAnotherComponent } from './components/random-user-another/random-user-another.component';
import { PhotoComponent } from './components/photo/photo.component';
import { PostsComponent } from './components/posts/posts.component';


const routes: Routes = [
  { path: '', redirectTo: 'feladat-1', pathMatch:'full' },
  { path: 'feladat-1', component: UserListComponent},
  { path: 'feladat-2', component: RandomUserComponent},
  { path: 'feladat-3', component: RandomUserAnotherComponent},
  { path: 'feladat-4', component: PhotoComponent},
  { path: 'feladat-5', component: PostsComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    NavigationComponent,
    RandomUserComponent,
    RandomUserAnotherComponent,
    PhotoComponent,
    PostsComponent,
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
