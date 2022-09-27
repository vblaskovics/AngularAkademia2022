import { Component } from '@angular/core';
import { Character } from './model/character.interface';
import { DisplayService } from './services/display.service';
import { GameService } from './services/game.service';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'rpg-game';

  characters: Character[] = [];
  subscription!: Subscription;

  constructor(
    private gameService: GameService,
    private displayService: DisplayService,
  ) {}

  recieveCharacter(event: Character[]) {
    this.characters = event;
    console.log(event);
  }

  simulateFight(): void {
    this.displayService.addHistoryEvent('Fight started');
    this.subscription = timer(0, 4000).subscribe(() => {
      this.gameService.attack(this.characters[0], this.characters[1]);
      if (this.characters[0].hp <= 0) {
        this.displayService.addHistoryEvent(`${this.characters[0].name} defeated.`);
        this.subscription.unsubscribe();
      }
      if (this.characters[1].hp <= 0) {
        this.displayService.addHistoryEvent(`${this.characters[1].name} defeated.`);
        this.subscription.unsubscribe();
      }
    });
  }

  logCombat() {
    return this.displayService.getHistoryText();
  }

  reset() {
    this.subscription.unsubscribe();
  }
}
