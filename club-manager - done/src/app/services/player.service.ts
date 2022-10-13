import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Player } from '../models/player-interface';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  players: Player[] = this.getPlayersFromLS("players");
  mockPlayers: Player[];

  numberOfPlayers: number;
  sumOfWage: number;
  highestPlayerWage: any;
  highestPlayersName: any;

  playerToList = new Subject<Player[]>();
  
  constructor() { 
    this.mockPlayers =[
      { id:1,
        name: 'John Smith',
        shirtNumber: 44,
        team: 'Football',
        age: 25,
        wage: 500000,
        endOfContract: new Date(2023, 3, 23)
        
      },

      { id:2,
        name: 'Jack Collins',
        shirtNumber: 46,
        team: 'Badmington',
        age: 27,
        wage: 400000,
        endOfContract: new Date(1-4-2023)
        
      },

      { id:3,
        name: 'Hilda Brün',
        shirtNumber: 42,
        team: 'Badmington',
        age: 26,
        wage: 410000,
        endOfContract: new Date(1-3-2023)
      },

      { id:4,
          name: 'Carole Hopkins',
          shirtNumber: 40,
          team: 'Football',
          age: 25,
          wage: 512000,
          endOfContract: new Date(1-10-2023)

        },

      { id:5,
          name: 'Mike Hobbes',
          shirtNumber: 50,
          team: 'Badmington',
          age: 23,
          wage: 476000,
          endOfContract: new Date(1-3-2023)

        },

      { id:6,
          name: 'Hayes Wilson',
          shirtNumber: 46,
          team: 'Football',
          age: 31,
          wage: 407000,
          endOfContract: new Date(1-12-2023)
        },
    ]

    this.numberOfPlayers = this.players.length;
    this.sumOfWage = this.wageTotal();
    this.highestPlayerWage = this.highestWage();
    this.highestPlayersName = this.highestPayedPlayersName();

  }

  //functions wich connected to localStorage purposes:

  getPlayersFromLS(key: string){
    this.players = JSON.parse(localStorage.getItem(key) || '[]');
    return this.players;
  }


  getPlayersFromLSByID(id: number){
    let index = this.players.findIndex(x=>x.id == id);
    return this.players[index];
  }

  savePlayerToLS(player: Player){
    let index = this.players.findIndex(x=>x.id == player.id);
    this.players.splice(index,1, player);
    localStorage.setItem("players", JSON.stringify(this.players));
   }

  savePlayersToLS(key: any, players: Player[]){
    localStorage.setItem(key, JSON.stringify(players));
   }

  addingNewPlayer(player: Player){
    player.id = this.players.length + 1;
    this.players.push(player);
    localStorage.setItem("players", JSON.stringify(this.players));
  }

  deletePlayer(player:Player){
    let index = this.players.findIndex(x=>x.id == player.id);
    this.players.splice(index, 1);
    localStorage.setItem("players", JSON.stringify(this.players));
  }


  //calculators:


  wageTotal(): number{
    let total = this.players.reduce((a, b)  =>{
      return a + b.wage;
    }, 0);
    return total
  }

  highestWage(){
    let maxWage = Number.MIN_VALUE;
  
      for(let i=0; i< this.players.length; i++){
          if(this.players[i].wage > maxWage){
          maxWage = this.players[i].wage;
        }
      }
      return maxWage;
  }

  highestPayedPlayersName() {

    let playerName = this.players.reduce((a, b) => (a.wage > b.wage) ? a : b);
    return playerName.name;
    
    }

    // getWagesdByTeams(team: any): any {
    //   return team.reduce((acc: any, obj: { wage: any; }) => acc + obj.wage, 0);
    // }

    // getPlayersByTeams(){
    //   return this.players.reduce((groups, item) => {
    //     const key = item.team as keyof Player;
    //         groups[key] = groups[key] || [];
    //         groups[key].push(item);
    //         return groups;
    //     }, Object.create(null));
    // }

  
}
