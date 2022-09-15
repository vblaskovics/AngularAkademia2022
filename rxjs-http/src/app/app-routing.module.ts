import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserComponent } from './components/user/user.component';
import { User2Component } from './components/user2/user2.component';
import { User3Component } from './components/user3/user3.component';

const routes: Routes = [
  {
    path: '1_feladat',
    component: UserListComponent,
  },
  {
    path: '2_feladat',
    component: User3Component,
  },
  {
    path: '2_feladat/:id',
    component: User3Component,
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)],
  ],
  exports: [RouterModule],
})

export class AppRoutingModule { }
