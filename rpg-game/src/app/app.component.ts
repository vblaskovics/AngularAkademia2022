import { Component } from '@angular/core';
import { Character } from './interfaces/character';
import { GameService } from './services/game.service';
import { HistoryService } from './services/history.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rpg-game';

  char1: Character;
  char2: Character;

  historyLog?: string

  constructor(private gameService: GameService, private historyService: HistoryService) {
    this.char1 = {name: "Hero", attack: 10, defense: 10, hp: 100};
    this.char2 = {name: "Ork", attack: 5, defense: 5, hp: 50}
  }

  onAttack(c1: Character, c2: Character) {
    this.gameService.attack(c1, c2);
    this. historyLog = this.historyService.getHistoryText(this.historyService.history)
    console.log(this.historyService.history)
  }

  
}
