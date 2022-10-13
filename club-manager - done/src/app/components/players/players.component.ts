import { Player } from './../../models/player-interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {

  players = this.playerService.players;
  whichElementSelected: boolean = false;
  selected? :Player;

  constructor(public playerService: PlayerService, private router: Router, private route: ActivatedRoute) {
    this.whichElementSelected = false;
   }

  ngOnInit(): void {
  }

  // addPlayer(){
  //   this.router.navigate(['add'], {relativeTo: this.route});
  //   console.log("add button működik")
  // }

  deletePlayer(player: Player){
    this.playerService.deletePlayer(player);
    // console.log(index);

  }

  // detailsOfPlayer(){
  //   this.router.navigate(['details' ], {relativeTo: this.route });
   
  // }

  onSelectedItem(itemSelected: Player){
    this.selected = itemSelected;
      return this.whichElementSelected = true;

    // let index = -1;

    // for(let i = 0; i < this.players.length && index == -1; i++)
    // {
    //     if(this.players[i] == itemSelected)
    //     index = i;
    //   }
    //   return index

    }
  

}
