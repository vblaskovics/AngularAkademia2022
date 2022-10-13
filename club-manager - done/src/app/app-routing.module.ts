import { WagesComponent } from './components/wages/wages.component';
import { PlayersComponent } from './components/players/players.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AddPlayerComponent } from './components/players/add-player/add-player.component';
import { PlayerDetailsComponent } from './components/players/player-details/player-details.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'players', component: PlayersComponent, 
// children:[
//   {path: 'add/:id', component: AddPlayerComponent},
//          ]
        },
  {path: 'wage', component: WagesComponent},
  {path: 'details/:id', component: PlayerDetailsComponent},
  {path: 'add/:id', component: AddPlayerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
