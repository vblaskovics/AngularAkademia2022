import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Feladat22Component } from './feladat22/feladat22.component';
import { Feladat1Component } from './pages/feladat1/feladat1.component';
import { Feladat2Component } from './pages/feladat2/feladat2.component';
import { Feladat3Component } from './pages/feladat3/feladat3.component';
import { Feladat4Component } from './pages/feladat4/feladat4.component';
import { Feladat5Component } from './pages/feladat5/feladat5.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'feladat1',
  },
  {
    path: 'feladat1',
    component: Feladat1Component,
  },
  {
    path: 'feladat2',
    component: Feladat2Component,
  },
  {
    path: 'feladat3',
    component: Feladat3Component,
  },
  {
    path: 'feladat4',
    component: Feladat4Component,
  },
  {
    path: 'feladat5',
    component: Feladat5Component,
  },
  {
    path: 'feladat22',
    component: Feladat22Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
