import { Component } from '@angular/core';
import { Character } from './interfaces/character';
import { DisplayService } from './services/display.service';
import { GameService } from './services/game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rpg-game';
  char1: Character = {
    name: 'MR X',
    attack: 3,
    defense: 5,
    hp: 8
  };

  char2: Character = {
    name: 'MR Y',
    attack: 1,
    defense: 6,
    hp: 5
  };

  textToDisplay: string = ""

  constructor(private gameService: GameService, private displayService: DisplayService) { }

  onAttack(): void {
    this.gameService.attack(this.char1, this.char2);
    this.textToDisplay = this.displayService.getHistoryText();
  }
}
