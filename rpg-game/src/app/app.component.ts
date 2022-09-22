import { DisplayService } from './services/display.service';
import { GameService } from './services/game.service';
import { Character } from './models/character';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'rpg-game';
  // c1: Character;
  // c2: Character;
  // historyText;

  // constructor(public gameService: GameService, private displayService: DisplayService){
  //   this.c1 = {attack:0, defense:0, hp:0, name:'Hero'};
  //   this.c2 = {attack:0, defense:0, hp:0, name:'Ork'};

  //   this.historyText = this.displayService.getHistoryText();
    

  // }

  c1: Character = {
    name: 'Hero',
    attack: 4,
    defense: 5,
    hp: 8
  }
  c2: Character = {
    name: 'Orc',
    attack: 3,
    defense: 3,
    hp: 5
  }

  historyText: string = ""

  constructor(private gameService: GameService, private displayService: DisplayService) { }

  onAttack(): void {
    this.gameService.attack(this.c1, this.c2);
    this.historyText = this.displayService.getHistoryText();
    console.log(this.historyText)
  }


}
