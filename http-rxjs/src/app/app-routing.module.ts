import { RandomUser3Component } from './random-user3/random-user3.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RandomUser2Component } from './random-user2/random-user2.component';
import { SubPaeComponent } from './sub-pae/sub-pae.component';
import { UserListComponent } from './user-list/user-list.component';
import { AlbumComponent } from './album/album.component';

const routes: Routes = [{
  path:'users', component: UserListComponent
},
{ path: 'subpage', component: SubPaeComponent},
{ path: 'randomuser', component: RandomUser2Component},
{ path: 'randomuser3', component: RandomUser3Component},
{ path: 'album', component: AlbumComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
