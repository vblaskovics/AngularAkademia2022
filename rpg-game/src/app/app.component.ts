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
