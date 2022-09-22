import { GameService } from './services/game.service';
import { Component } from '@angular/core';
import { Character } from './models/character';
import { DisplayService } from './services/display.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rpg-game';

  Char1: Character;
  Char2: Character;
  historyText: string = this.displayService.getHistoryText();

  constructor(private gameService: GameService, private displayService: DisplayService) {
    this.Char1 = { attack: 4, defense: 2, hp: 8, name: 'Hero'};
    this.Char2 = { attack: 4, defense: 2, hp: 8, name: 'Ork'};
  }

  onAttack() {
    this.gameService.attack(this.Char1, this.Char2);
    this.historyText = this.displayService.getHistoryText();
  }
}
