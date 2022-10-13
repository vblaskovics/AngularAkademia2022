
import { PlayerService } from './../../services/player.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  players = this.playerService.players;
  
  numberOfPlayers = this.playerService.numberOfPlayers;
  sumOfWage = this.playerService.sumOfWage;
  highestPlayerWage = this.playerService.highestPlayerWage;
  highestPlayersName = this.playerService.highestPlayersName;


  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
  }

}
