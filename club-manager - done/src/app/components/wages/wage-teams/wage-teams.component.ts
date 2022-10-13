import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/models/player-interface';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-wage-teams',
  templateUrl: './wage-teams.component.html',
  styleUrls: ['./wage-teams.component.scss']
})
export class WageTeamsComponent implements OnInit {

  players = this.playerService.players ;
  footballTeam!: Player[];
  badmintonTeam!: Player[];
  btWages!: any
  ftWages!: any

  constructor(private playerService: PlayerService) { 
    this.footballTeam = this.selectFootballTeam();
    this.badmintonTeam = this.selectBadmintonTeam();
    this.btWages = this.getBtWages();
    this.ftWages = this.getFtWages();
  }

  ngOnInit(): void {
  }

  deletePlayer(player: Player){
    this.playerService.deletePlayer(player);
    // console.log(index);

  }

  selectFootballTeam(): Player[] {
    let footballPlayers = [];
    for(let i = 0; i < this.players.length; i++){

      if(this.players[i].team == "Football")
      footballPlayers.push(this.players[i])
    }
    return footballPlayers
  }


  selectBadmintonTeam(): Player[]{
    let badmintonPlayers = [];
    for(let i = 0; i < this.players.length; i++){

      if(this.players[i].team == "Badminton")
      badmintonPlayers.push(this.players[i])
    }
    return badmintonPlayers
  }


  getBtWages(){
    let wages = 0;
    this.badmintonTeam.forEach(player => wages += player.wage);
    return wages
  }

  getFtWages(){
    let wages = 0;
    this.footballTeam.forEach(player => wages += player.wage);
    return wages
  }
}
