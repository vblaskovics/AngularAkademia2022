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
  textToDisplay: string = ""

  constructor(private gameService: GameService, private displayService: DisplayService) { }

  onAttack(): void {
    this.gameService.attack(this.c1, this.c2);
    this.textToDisplay = this.displayService.getHistoryText();
  }
}
