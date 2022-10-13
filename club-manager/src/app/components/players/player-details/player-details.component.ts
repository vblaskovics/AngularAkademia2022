import { Player } from './../../../models/player-interface';
import { Component, Input, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.scss']
})
export class PlayerDetailsComponent implements OnInit {

  // @Input() players? : Player[];
  players = this.playerService.players;
  // = this.playerService.players;
 

  constructor(private playerService: PlayerService) { 
    
  }

  ngOnInit(): void {
  }

}
