import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Player } from '../models/player-interface';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  players: Player[];
  selectedPlayer?: Player;
  id!: number;

  numberOfPlayers: number;
  sumOfWage: number;
  highestPlayerWage: any;
  highestPlayersName: any;

  playerToList = new Subject<Player[]>();
  
  constructor() { 
    this.players =[
      { id:1,
        name: 'John Smith',
        shirtNumber: 44,
        team: 'Football',
        age: 25,
        wage: 500000,
        endOfContractDate: "2023-8-1"
        // new Date("2023-7-1"),
      },

      { id:2,
        name: 'Jack Collins',
        shirtNumber: 46,
        team: 'Badmington',
        age: 27,
        wage: 400000,
        endOfContractDate: "2023-7-1"
        // new Date("2023-7-1"),
      },

      { id:3,
        name: 'Hilda Brün',
        shirtNumber: 42,
        team: 'Badmington',
        age: 26,
        wage: 410000,
        endOfContractDate: "2023-7-1"
        // new Date("2023-7-1"),
      },

      { id:4,
          name: 'Carole Hopkins',
          shirtNumber: 40,
          team: 'Football',
          age: 25,
          wage: 512000,
          endOfContractDate: "2023-9-1"
        // new Date("2023-7-1"),
        },

      { id:5,
          name: 'Mike Hobbes',
          shirtNumber: 50,
          team: 'Badmington',
          age: 23,
          wage: 476000,
          endOfContractDate: "2023-7-1"
        // new Date("2023-7-1"),
        },

      { id:6,
          name: 'Hayes Wilson',
          shirtNumber: 46,
          team: 'Football',
          age: 31,
          wage: 407000,
          endOfContractDate: "2023-12-1"
        // new Date("2023-7-1"),
        },
    ]

    this.numberOfPlayers = this.players.length;
    this.sumOfWage = this.wageTotal();
    this.highestPlayerWage = this.highestPayedPlayer();
    this.highestPlayersName = this.highestPayedPlayersName();

  }

 wageTotal(): number{
  var total = this.players.reduce((a, b)  =>{
    return a + b.wage;
  }, 0);
  return total
 }

 highestPayedPlayer(){
  let maxWage = Number.MIN_VALUE;
 
    for(let i=0; i< this.players.length; i++){
        if(this.players[i].wage > maxWage){
        maxWage = this.players[i].wage;
       }
    }
    return maxWage;
 }

 highestPayedPlayersName(): any{
  let playerName;

    for(let i=0; i< this.players.length; i++){
      if(this.players[i].wage > 500000 ){  // the given number is still static
      playerName = this.players[i].name;
      }
    }
    return playerName;
  }

  deletePlayer(index: number){
    this.players.splice(index, 1)
  }

  savePlayer(player: Player){
   this.players.push(player);
   this.playerToList.next(this.players);
  }

  // choosenPlayer(id: number){
  //   this.players[id].valueOf();
  // }
}
