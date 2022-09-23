import { Component } from '@angular/core';
import { Character } from './model/character.interface';
import { DisplayService } from './services/display.service';
import { GameService } from './services/game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rpg-game';

  displayText: string = "";

  characterOne: Character = {
    name: 'Hero',
    attack: 4,
    defense: 5,
    hp: 8
  }
  characterTwo: Character = {
    name: 'Orc',
    attack: 3,
    defense: 3,
    hp: 5
  }

  constructor(private gameService: GameService, private displayService: DisplayService) {
    displayService.getHistoryText();
  }

  duringAttack() {
    this.gameService.attack(this.characterOne, this.characterTwo);
    this.displayText = this.displayService.getHistoryText();
  }
}
