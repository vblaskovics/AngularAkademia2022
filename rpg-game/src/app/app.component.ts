import { Component } from '@angular/core';
import { Character } from './interfaces/character';
import { DisplayService } from './services/display.service';
import { GameService } from './services/game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'rpg-game';

  textToDisplay = '';
  constructor(
    private gameService: GameService,
    public displayService: DisplayService
  ) {
    /*     console.log(`c1:`, c1);
    console.log(`c2:`, c2);
    gameService.attack(c1, c2);
    console.log(`c1:`, c1);
    console.log(`c2:`, c2); */
  }
  onAttack() {
    // this.gameService.attack(this.c1, this.c2);
    this.textToDisplay = this.displayService.getHistoryText();
  }
}
