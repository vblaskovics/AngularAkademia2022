import { ActivatedRoute, Router } from '@angular/router';
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
  players!: Player;
  currentId!: number
  // = this.playerService.players;
 

  constructor(private playerService: PlayerService, private router: Router, private activatedRoute: ActivatedRoute, ) { 
    this.currentId = activatedRoute.snapshot.params['id'];

    
  }

  ngOnInit(): void {
    this.players = this.playerService.getPlayersFromLSByID(this.currentId);
  }

  deletePlayer(player: Player){
    this.playerService.deletePlayer(player);
    this.router.navigate(['players']);

  }


}
